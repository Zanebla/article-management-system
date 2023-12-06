package redlib.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import redlib.backend.annotation.BackendModule;
import redlib.backend.annotation.NeedNoPrivilege;
import redlib.backend.annotation.Privilege;
import redlib.backend.dto.ArticleDTO;
import redlib.backend.dto.query.ArticleQueryDTO;
import redlib.backend.dto.query.ArticleFullSearchQueryDTO;
import redlib.backend.model.Page;
import redlib.backend.service.ArticleService;
import redlib.backend.vo.ArticleVO;
import redlib.backend.vo.LuceneResultBookVO;
import java.util.List;
@RestController
@RequestMapping("/api/article")
@BackendModule({"page:页面", "edit:编辑", "update:修改", "add:创建", "delete:删除"})
public class ArticleController {
    @PostMapping("listArticle")
    @Privilege("page")
    public Page<ArticleVO> listArticle(@RequestBody ArticleQueryDTO queryDTO) {
        return articleService.listByPage(queryDTO);
    }
    @Autowired
    private ArticleService articleService;
    @PostMapping("addArticle")
    @Privilege({"add", "edit"})
    public void addArticle(@RequestBody ArticleDTO articleDTO) {
        articleService.addArticle(articleDTO);
    }
    @PostMapping("updateArticle")
    @Privilege({"update", "edit"})
    public Integer updateArticle(@RequestBody ArticleDTO articleDTO) {
        return articleService.updateArticle(articleDTO);
    }
    @PostMapping("deleteArticle")
    @Privilege({"delete", "edit"})
    public void deleteArticle(@RequestBody List<Integer> ids) {
        articleService.deleteByCodes(ids);
    }
    @PostMapping("getArticleByCode")
    @NeedNoPrivilege
    public String getArticleByCode() {
        return "Hello,world";
    }
    @PostMapping("fullSearch")
    @Privilege("page")
    public Page<LuceneResultBookVO> search(@RequestBody ArticleFullSearchQueryDTO queryDTO) {
        return articleService.search(queryDTO);
    }
}
