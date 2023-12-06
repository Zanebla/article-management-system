package redlib.backend.dto.query;

import lombok.Data;

@Data
public class ArticleFullSearchQueryDTO extends PageQueryDTO{
    private String content;
}
