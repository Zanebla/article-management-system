package redlib.backend.dto.query;


import lombok.Data;

@Data
public class ArticleQueryDTO extends PageQueryDTO{
    /**
     * 文章名称，模糊匹配
     */
    private String title;
    private String author;
    private String publishTime;
}
