package redlib.backend.service.impl;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.bulk.BulkOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;
import redlib.backend.dao.ArticleMapper;
import redlib.backend.dto.ArticleDTO;
import redlib.backend.dto.query.ArticleQueryDTO;
import redlib.backend.dto.query.ArticleFullSearchQueryDTO;
import redlib.backend.model.Article;
import redlib.backend.model.Page;
import redlib.backend.model.Token;
import redlib.backend.service.AdminService;
import redlib.backend.service.ArticleService;
import redlib.backend.service.utils.ArticleUtils;
import redlib.backend.utils.ElasticsearchUtils;
import redlib.backend.utils.FormatUtils;
import redlib.backend.utils.PageUtils;
import redlib.backend.utils.ThreadContextHolder;
import redlib.backend.vo.ArticleVO;
import redlib.backend.vo.LuceneResultBookVO;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;


@Service
public class ArticleServiceImpl implements ArticleService {
    @Autowired
    private ArticleMapper articleMapper;
    @Autowired
    private AdminService adminService;
    @Autowired
    private ElasticsearchClient elasticsearchClient;
    /**
     * 分页获取文章信息
     * @param queryDTO 查询条件和分页信息
     * @return 带分页信息的文章数据列表
     */
    @Override
    public Page<ArticleVO> listByPage(ArticleQueryDTO queryDTO) {
        if (queryDTO == null) {
            queryDTO = new ArticleQueryDTO();
        }
        queryDTO.setTitle(FormatUtils.makeFuzzySearchTerm(queryDTO.getTitle()));
        Integer size = articleMapper.count(queryDTO);
        PageUtils pageUtils = new PageUtils(queryDTO.getCurrent(), queryDTO.getPageSize(), size);

        if (size == 0) {
            // 没有命中，则返回空数据。
            return pageUtils.getNullPage();
        }

        // 利用myBatis到数据库中查询数据，以分页的方式
        List<Article> list = articleMapper.list(queryDTO, pageUtils.getOffset(), pageUtils.getLimit());

        // 提取list列表中的创建人字段，到一个Set集合中去
        Set<Integer> adminIds = list.stream().map(Article::getCreatedBy).collect(Collectors.toSet());

        // 提取list列表中的更新人字段，追加到集合中去
        adminIds.addAll(list.stream().map(Article::getCreatedBy).collect(Collectors.toSet()));

        // 获取id到人名的映射
        Map<Integer, String> nameMap = adminService.getNameMap(adminIds);

        List<ArticleVO> voList = new ArrayList<>();
        for (Article article : list) {
            // Department对象转VO对象
            ArticleVO vo = ArticleUtils.convertToVO(article, nameMap);
            voList.add(vo);
        }

        return new Page<>(pageUtils.getCurrent(), pageUtils.getPageSize(), pageUtils.getTotal(), voList);
    }




    /**
     * 新建文章
     *
     * @param articleDTO 文章输入对象
     * @return 文章编码
     */
    @Override
    public Integer addArticle(ArticleDTO articleDTO) {
        Token token = ThreadContextHolder.getToken();
        // 校验输入数据正确性
        ArticleUtils.validateArticle(articleDTO);
        Assert.isNull(articleMapper.getByTitle(articleDTO.getTitle()),"此文章已经存在");
        // 创建实体对象，用以保存到数据库
        Article article= new Article();
        // 将输入的字段全部复制到实体对象中
        BeanUtils.copyProperties(articleDTO, article);
        article.setCreatedAt(new Date());
        article.setUpdatedAt(new Date());
        article.setCreatedBy(token.getUserId());
        article.setUpdatedBy(token.getUserId());
        // 调用DAO方法保存到数据库表
        articleMapper.insert(article);

        // 新建elasticsearch索引
        List<BulkOperation> list = new ArrayList<>();
        list.add(ElasticsearchUtils.addBulkBook(article.getId(), article.getContent()));
        ElasticsearchUtils.bulkAddDocument(elasticsearchClient, list);
        return article.getId();
    }


    /**
     * 更新文章数据
     *
     * @param articleDTO 文章输入对象
     * @return 文章编码
     */
    @Override
    public Integer updateArticle(ArticleDTO articleDTO) {
        // 校验输入数据正确性
        Token token = ThreadContextHolder.getToken();
        ArticleUtils.validateArticle(articleDTO);
        Assert.notNull(articleDTO.getId(), "文章id不能为空");
        Article article = articleMapper.selectByPrimaryKey(articleDTO.getId());
        Assert.notNull(article, "没有找到文章，Id为：" + articleDTO.getId());

        BeanUtils.copyProperties(articleDTO, article);
        article.setUpdatedBy(token.getUserId());
        article.setUpdatedAt(new Date());
        articleMapper.updateByPrimaryKey(article);
        ElasticsearchUtils.updateDocument(elasticsearchClient, article.getId(), article.getContent());
        return article.getId();
    }

    /**
     * 根据编码列表，批量删除文章
     *
     * @param ids 编码列表
     */
    @Override
    public void deleteByCodes(List<Integer> ids) {
        Assert.notEmpty(ids, "文章id列表不能为空");
        articleMapper.deleteByCodes(ids);
        for (Integer id : ids) {
            ElasticsearchUtils.deleteDocument(elasticsearchClient, id);
        }
    }

//    全文搜索
    @Override
    public Page<LuceneResultBookVO> search(ArticleFullSearchQueryDTO queryDTO) {
        Page<LuceneResultBookVO> result =  ElasticsearchUtils.query(elasticsearchClient, queryDTO);
        Set<Integer> ids = result.getList().stream().map(LuceneResultBookVO::getBookId).collect(Collectors.toSet());
        List<Article> list = new ArrayList<>();
        if(!CollectionUtils.isEmpty(ids)) {
            list = articleMapper.listByIds(new ArrayList<>(ids));
        }
        Map<Integer, Article> map = list.stream().collect(Collectors.toMap(Article::getId, Function.identity()));
        result.getList().forEach(item->{
            Article article = map.get(item.getBookId());
            if(article!=null){
                item.setTitle(article.getTitle());
            }
        });
        return result;
    }
    }
