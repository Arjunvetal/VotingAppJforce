package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.UserRegister;
import com.example.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public UserRegister saveUser(UserRegister userRegister){
		return userRepository.save(userRegister);
	}
}
