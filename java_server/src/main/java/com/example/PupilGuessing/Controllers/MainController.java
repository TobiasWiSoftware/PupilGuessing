package com.example.PupilGuessing.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PupilGuessing.Entities.PupilEntity;
import com.example.PupilGuessing.Entities.PlayerEntity;

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

    @GetMapping("/getpupils")
    public Iterable<PupilEntity> getPupilsList() {
        return mainService.getPupils();
    }

    @PostMapping("/setpupil")
    public PupilEntity setPupil(@RequestBody PupilEntity pupil) {
        return mainService.setPupil(pupil);
    }

    // Sicherung der Spieler in der Datenbank
    @PostMapping("/setplayer")
    public PlayerEntity setUser(@RequestBody PlayerEntity user) {
        return mainService.setUser(user);
    }

    @GetMapping("/getplayers")
    public Iterable<PlayerEntity> getPlayers() {
        return mainService.getPlayers();
    }
}
