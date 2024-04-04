package com.example.PupilGuessing.Model;
;

// Festlegung der Datatransferobjekte == objecte die ueber api ausgetauscht werden


public class PupilDto {
    public int id;
    public String firstName;
    public String lastName;


    public PupilDto(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
}
