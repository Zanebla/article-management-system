package redlib.backend.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import redlib.backend.dto.query.ArticleQueryDTO;
import redlib.backend.model.Article;

import java.util.List;

@Mapper
public interface ArticleMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Article record);
    int insertSelective(Article record);
    Article selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Article record);

    int updateByPrimaryKey(Article record);

    Article getByCode(
            @Param("articleCode") String articleCode,
            @Param("tenantCode") String tenantCode);


    Integer count(ArticleQueryDTO queryDTO);

    List<Article> list(@Param("queryDTO") ArticleQueryDTO queryDTO, @Param("offset") Integer offset, @Param("limit") Integer limit
    );

    void deleteByCodes(@Param("codeList") List<Integer> codeList);

    List<Article> listByCodes(
            @Param("codeList") List<String> codeList,
            @Param("tenantCode") String tenantCode);

    List<Article> listByName(
            @Param("title") String title,
            @Param("tenantCode") String tenantCode);

    Article getByTitle(
            @Param("title") String title);

    List<Article> listByIds(@Param("ids")List<Integer> ids);


}