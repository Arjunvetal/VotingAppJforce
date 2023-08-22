package com.example.controller;

import java.util.List;
import java.util.*;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.Credentials;
import com.example.entity.Candidate;
import com.example.entity.Voter;
import com.example.repo.CandidateRepository;
import com.example.repo.UserRepository;
import com.example.repo.VoterRepository;

@CrossOrigin
@RestController
@RequestMapping("/voting")
public class VotingController {

    @Autowired
    private VoterRepository voterRepository;

    @Autowired
    private CandidateRepository candidateRepository;
    
    @Autowired
	private UserRepository userRepository;

    @PostMapping("/vote")
    public String vote(@RequestBody Voter voter) {
        // Check if the voter has already voted
        java.util.Optional<Voter> existingVoter = voterRepository.findByName(voter.getName());
        if (existingVoter.isPresent()) {
           // return ResponseEntity.badRequest().body("You have already voted.");
        	return "You have already voted.";
        }

        // Find the candidate and update their vote count
        java.util.Optional<Candidate> candidate = candidateRepository.findByName(voter.getVotedFor());
        if (candidate.isPresent()) {
            candidate.get().setVoteCount(candidate.get().getVoteCount() + 1);
            candidateRepository.save(candidate.get());

            // Save the voter record
            voterRepository.save(voter);

            //return ResponseEntity.ok("Vote successfully recorded.");
            return "success";
        } else {
          //  return ResponseEntity.badRequest().body("Candidate not found.");
            return "Candidate not found.";
        }
    }

    @GetMapping("/admin")
    public List<Candidate> getCandidates() {
    	
        return candidateRepository.findAll();
    }
}
