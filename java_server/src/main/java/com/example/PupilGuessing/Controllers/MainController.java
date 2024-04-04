package com.example.PupilGuessing.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PupilGuessing.Entities.PupilEntity;
import com.example.PupilGuessing.Entities.UserEntity;

import com.example.PupilGuessing.Services.IMainService;

@RestController
@RequestMapping("/api")
public class MainController {

    // Injection service
    private final IMainService mainService;

    public MainController(IMainService mainService) {
        this.mainService = mainService;
    }
    
    // Uebertragung einer Liste mit allen Schuelern test ueber Firefox localhost:8080/api/students - kommt ueber url unverschluesselt
    @GetMapping("/getrandompupil")
    public PupilEntity getPupils() {
        return mainService.getRandomPupil();
    }

    @PostMapping("/setpupil")
    public PupilEntity setPupil(@RequestBody PupilEntity pupil) {
        return mainService.setPupil(pupil);
    }

    // Test satz ueber postman == hello world

    // {
    //     "firstname": "testfname3",
    //     "lastname": "testlname3",
    //     "pictureBase64": "SGVsbG8sIFdvcmxkIQ=="
    // }


    // Sicherung der Spieler in der Datenbank
    @PostMapping("/user")
    public UserEntity setUser(@RequestBody UserEntity user) {
        return mainService.setUser(user);
    }
}
