package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.Credentials;
import com.example.entity.UserRegister;
import com.example.repo.UserRepository;
import com.example.service.LoginService;
import com.example.service.UserService;

@CrossOrigin
@RestController

public class UserController {

	@Autowired 
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	@Autowired
    private LoginService loginService;

    @GetMapping("/login")
    public String showLoginForm() {
        return "login.html"; 
    }

    @PostMapping("/login")
    public String login(@RequestBody Credentials cred ) {
        if (loginService.authenticate(cred.getUsername(), cred.getPassword()) != null) {
            // Authentication successful
            // You can add additional logic here, such as setting session attributes.
            return "success"; // Redirect to the dashboard or any other page
        } else {
            // Authentication failed
           // model.addAttribute("error", "Invalid credentials");
            return "bad credential"; // Return to the login page with an error message
        }
    }
    
    @PostMapping("user/register")
	public  UserRegister registerUser(@RequestBody UserRegister userRegister) {
		return userService.saveUser(userRegister);
	}
	
//    @PostMapping("/user/vote")
//    public String saveVote(@RequestBody Vote vote) {
//    	//String username=vote.getUsername();
//    	boolean temp=voteRepo.existsById(vote.getUsername());
//    	
//    	if(temp) {
//    		return "You already voted";
//    	}
//    	else {
//    		Vote tempvote=voteRepo.getById(vote.getUsername());
//    		int sum=tempvote.getCount();
//    		vote.setCount(++sum);
//    		voteRepo.save(vote);
//    		return "Succesfully vote";
//    	}
//    	//return voteRepo.save(vote);
//    	
//    }
    
    
	
	

}
