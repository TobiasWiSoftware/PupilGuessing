package com.example.PupilGuessing.Services;

import com.example.PupilGuessing.Repositories.IPupilRepository;
import com.example.PupilGuessing.Repositories.IUserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.PupilGuessing.Entities.*;

import java.util.Optional;

@Service
public class MainServices implements IMainService {

    private final IPupilRepository pupilRepository;
    private final IUserRepository userRepository;

    // Injection des Repositorys durch den Konstruktor
    @Autowired
    public MainServices(IPupilRepository repository, IUserRepository userRepository) {
        this.pupilRepository = repository;
        this.userRepository = userRepository;
    }

    // Implementierung der IMainService und Verarbeitung der Daten
    public PupilEntity getRandomPupil() {
        Optional<PupilEntity> pupil = pupilRepository.findRandomPupil();
        return pupil.orElse(null); // Gibt null zurück, wenn kein Schüler gefunden wird
    }

    public Iterable<PupilEntity> getPupils() {
        return pupilRepository.findAll();
    }

    public PupilEntity setPupil(@RequestBody PupilEntity pupil) {
        // Da wir direkt mit dem Base64-String arbeiten, ist keine Konvertierung
        // notwendig
        // Speichern oder Aktualisieren der Entität wie gehabt
        return pupilRepository.save(pupil);
    }

    // Diese Methode sollte in einem UserService implementiert werden
    // und das UserRepository verwenden, um Benutzer zu speichern oder zu
    // aktualisieren
    public UserEntity setUser(UserEntity user) {
        return userRepository.save(user);
    }
}
