package com.example.Backendv1.authentication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class login {
    @GetMapping("/hello")
    public static String hello(){
        return "hello";
    }
}
