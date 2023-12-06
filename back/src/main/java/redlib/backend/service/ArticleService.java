package redlib.backend.service;
import redlib.backend.dto.ArticleDTO;
import redlib.backend.dto.query.ArticleQueryDTO;
import redlib.backend.dto.query.ArticleFullSearchQueryDTO;
import redlib.backend.model.Page;
import redlib.backend.vo.ArticleVO;
import redlib.backend.vo.LuceneResultBookVO;
import java.util.List;

/**
 * 文章服务接口
 * @author Zane
 */
public interface ArticleService {
    Page<ArticleVO> listByPage(ArticleQueryDTO queryDTO);
    /**
     * 新建文章
     * @param articleDTO 文章输入对象
     * @return 文章编码
     */
    Integer addArticle (ArticleDTO articleDTO);
    /**
     * 更新文章数据
     * @param articleDTO 文章输入对象
     * @return 文章编码
     */
    Integer updateArticle(ArticleDTO articleDTO);
    /**
     * 根据编码列表，批量删除文章
     * @param ids 编码列表
     */
    void deleteByCodes(List<Integer> ids);

    Page<LuceneResultBookVO> search(ArticleFullSearchQueryDTO queryDTO);
}
