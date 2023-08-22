package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.UserRegister;
import com.example.repo.UserRepository;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;
	

    public UserRegister authenticate(String username, String password) {
    	
    	UserRegister temp= userRepository.findById(username).orElse(null);
    	if(temp==null) {
    		return null;
    	}
    	else{
    		boolean equals = temp.getPassword().equals(password);
    		if(equals) return temp;
    		return temp;
    	}
    	
        
    }
    
}

