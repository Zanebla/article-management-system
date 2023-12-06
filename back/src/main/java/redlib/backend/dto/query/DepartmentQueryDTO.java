package redlib.backend.dto.query;

import lombok.Data;

/**
 * @author Zane
 * @description
 */
@Data
public class DepartmentQueryDTO extends PageQueryDTO {
    /**
     * 部门名称，模糊匹配
     */
    private String departmentName;
}
