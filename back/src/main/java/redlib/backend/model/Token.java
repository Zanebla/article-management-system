package redlib.backend.model;

import lombok.Data;

import java.util.Date;
import java.util.Set;

/**
 * @author Zane
 */
@Data
public class Token {
    private String accessToken;
    private String userName;
    private String userCode;
    private String browser;
    private String os;
    private String device;
    private Integer userId;
    private Integer sex;
    private String department;
    private String ipAddress;
    /**
     * 后台管理权限
     */
    private Set<String> privSet;
    private Date lastAction;
}
