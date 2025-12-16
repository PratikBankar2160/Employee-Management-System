package Com.Controller;

import Com.DTO.UserDTO;
import Com.Entity.User;
import Com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public String register(@RequestBody User user){
        return service.registration(user);
    }

    @GetMapping("/login/{username}/{password}")
    public User Login(@PathVariable String username, @PathVariable String password){
        return service.login(new UserDTO(username,password));
    }
}
