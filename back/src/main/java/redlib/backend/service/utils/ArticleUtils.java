package redlib.backend.service.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.util.Assert;
import redlib.backend.dto.ArticleDTO;
import redlib.backend.model.Article;
import redlib.backend.utils.FormatUtils;
import redlib.backend.vo.ArticleVO;

import java.util.Map;

public class ArticleUtils {
    /**
     * 规范并校验articleDTO
     * @param articleDTO
     */
    public static void validateArticle(ArticleDTO articleDTO) {
        FormatUtils.trimFieldToNull(articleDTO);
        Assert.notNull(articleDTO, "文章输入数据不能为空");
        Assert.hasText(articleDTO.getTitle(), "部门名称不能为空");
    }



    /**
     * 将实体对象转换为VO对象
     * @param article 实体对象
     * @param nameMap
     * @return VO对象
     */
    public static ArticleVO convertToVO(Article article, Map<Integer, String> nameMap) {
        ArticleVO articleVO = new ArticleVO();
        BeanUtils.copyProperties(article, articleVO);

        articleVO.setCreatedByDesc(nameMap.get(article.getCreatedBy()));
        return articleVO;
    }
}
