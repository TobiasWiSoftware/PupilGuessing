package com.example.PupilGuessing.Entities;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * Entity-Klasse für Schüler.
 */
@Entity
@Table(name = "pupils")
@NamedQueries({
    @NamedQuery(name = "PupilEntity.findAll", query = "SELECT p FROM PupilEntity p"),
    @NamedQuery(name = "PupilEntity.findById", query = "SELECT p FROM PupilEntity p WHERE p.id = :id"),
    @NamedQuery(name = "PupilEntity.findByFirstname", query = "SELECT p FROM PupilEntity p WHERE p.firstname = :firstname"),
    @NamedQuery(name = "PupilEntity.findByLastname", query = "SELECT p FROM PupilEntity p WHERE p.lastname = :lastname")
})
public class PupilEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Id")
    private Integer id;
    
    @Basic(optional = false)
    @Column(name = "first_name")
    private String firstname;
    
    @Basic(optional = false)
    @Column(name = "last_name")
    private String lastname;

    // Anpassung für das Bild als Base64-kodierten String
    @Basic(optional = true)
    @Column(name = "picture_data", columnDefinition = "MEDIUMTEXT")
    private String picturedata;

    public PupilEntity() {
    }

    public PupilEntity(Integer id) {
        this.id = id;
    }

    public PupilEntity(Integer id, String firstname, String lastname, String picturedata) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.picturedata = picturedata;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPicturedata() {
        return picturedata;
    }

    public void setPicturedata(String picturedata) {
        this.picturedata = picturedata;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PupilEntity)) {
            return false;
        }
        PupilEntity other = (PupilEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.example.PupilGuessing.Entities.PupilEntity[ id=" + id + " ]";
    }
}
