package com.example.PupilGuessing.Repositories;

import com.example.PupilGuessing.Entities.PupilEntity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;



public interface IPupilRepository extends JpaRepository<PupilEntity, Integer> {
    // Da Spring Data JPA aus dem Methodennamen die Abfrage generiert, musst du sicherstellen,
    // dass deine Entität Pupil Felder für firstname und lastname hat.
    // Diese Methode ersetzt deine ursprüngliche getPupils(String firstname, String lastname) Methode
    // und gibt eine Liste von Pupils zurück, die zu den gegebenen Namen passen.

    @Query(value = "SELECT * FROM pupils ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<PupilEntity> findRandomPupil();

    // Spring Data JPA stellt bereits eine Methode `findAll` zur Verfügung,
    // die deine benutzerdefinierte getPupils() Methode ersetzt, um alle Pupils zu erhalten.
    // List<Pupil> findAll(); // Diese Zeile ist optional, da sie von JpaRepository geerbt wird

    // Spring Data JPA unterstützt direkt keine setUser Methode wie in deinem Beispiel.
    // Das Setzen oder Aktualisieren von Benutzern sollte über Service-Schicht-Methoden gehandhabt werden,
    // die Repositorien für User-Entitäten verwenden.
}
