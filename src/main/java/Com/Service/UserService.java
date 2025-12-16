package Com.Service;

import Com.DTO.UserDTO;
import Com.Entity.User;
import Com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public String registration(User user){
        User existingUser =  repo.findByUsername(user.getUsername());

        if(existingUser == null){
            repo.save(user);
            return "Registration Successful";
        }else{
            return "This username is already exists.. Please try another one";
        }
    }

    public User login(UserDTO userDTO){
        User existingUser = repo.findByUsername(userDTO.getUsername());

        if(existingUser == null){
            return null;
        }else{
            if(userDTO.getPassword().equals(existingUser.getPassword())){
                return existingUser;
            }else{
                return null;
            }
        }
    }
}
