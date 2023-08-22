package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.UserRegister;

@Repository
public interface UserRepository extends JpaRepository<UserRegister, String>{
	
//	@Query("SELECT u FROM UserRegister u WHERE u.username = :username")
//	UserRegister findByUsernameCustom(String username);
//	
//	@Modifying
//	@Query("UPDATE UserRegister ap SET candidate = ?2 WHERE ap.username = ?1")
//	String editVote(String  username, String candidate);
	
	
	
}
