package Com.Controller;

import Com.DTO.UserDTO;
import Com.Entity.User;
import Com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public String register(@RequestBody User user){
        return service.registration(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> Login(@RequestBody UserDTO userDTO){
        User existingUser = service.login(userDTO);

        return existingUser != null ?
                ResponseEntity.status(HttpStatus.OK).body(existingUser)
                :ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username and password.!");
    }
}
