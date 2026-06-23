package LearnPath.Backend.payload;

import LearnPath.Backend.domain.AuthProvider;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private Long id;
    private String name;
    private String email;
    private String picture;
    private AuthProvider provider;

    public UserResponse(Long id, String name, String email, String picture, AuthProvider provider) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.provider = provider;
    }
}
