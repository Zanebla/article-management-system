package redlib.backend.vo;

import lombok.Data;

import java.util.Date;

@Data
public class DepartmentVO {
    /**
     * id
     */
    private Integer id;

    /**
     * 部门名称
     */
    private String departmentName;

    /**
     * 联系人
     */
    private String contact;

    /**
     * 联系电话
     */
    private String contactPhone;

    /**
     * 描述
     */
    private String description;

    /**
     * 创建日期
     */
    private Date createdAt;

    /**
     * 修改日期
     */
    private Date updatedAt;

    /**
     * 创建人
     */
    private Integer createdBy;

    /**
     * 创建人
     */
    private String createdByDesc;

}
