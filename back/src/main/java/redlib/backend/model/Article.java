package redlib.backend.model;

import lombok.Data;

import java.util.Date;

/**
 * article的实体类
 */
@Data
public class Article {
    /**
     *  主键
     */
    private Integer id;

    /**
     *  文章标题
     */
    private String title;

    /**
     *  文章作者
     */
    private String author;

    /**
     *  文章来源
     */
    private String source;

    /**
     *  文章地址
     */
    private String url;

    /**
     *  文章内容
     */
    private String content;

    /**
     *  发表时间
     */
    private String publishTime;

    /**
     *  创建日期
     */
    private Date createdAt;

    /**
     *  更新日期
     */
    private Date updatedAt;

    /**
     *  创建人
     */
    private Integer createdBy;

    /**
     *  更新人
     */
    private Integer updatedBy;

    /**
     *  删除
     */
    private Integer deleted;
}