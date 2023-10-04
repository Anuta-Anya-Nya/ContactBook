package com.anna.contactapp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name= "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "notes")
    private String notes;
}