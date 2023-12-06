package redlib.backend.dto;


import lombok.Data;

@Data
public class ArticleDTO {
    private Integer id;
    private String title;
    private String author;
    private String source;
    private String url;
    private String content;
    private String publishTime;
}
