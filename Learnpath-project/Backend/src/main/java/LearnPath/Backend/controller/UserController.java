package LearnPath.Backend.controller;

import LearnPath.Backend.domain.User;
import LearnPath.Backend.exception.ResourceNotFoundException;
import LearnPath.Backend.repository.UserRepository;
import LearnPath.Backend.security.CurrentUser;
import LearnPath.Backend.security.UserPrincipal;
import LearnPath.Backend.payload.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserResponse getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
        return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getPicture(), user.getProvider());
    }
}
