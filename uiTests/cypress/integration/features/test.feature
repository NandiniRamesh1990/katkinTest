Feature: Sign up page tests 

 Background:
    Given I am at Katkin sign up page

@smoke
Scenario: Test happy path with combination of no.of.pets: 1, gender: boy, neutered: yes
  Given As a user I sign up for no of pets 1 and gender is boy and is neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 2, gender: boy, neutered: yes
  Given As a user I sign up for no of pets 2 and gender is boy and is neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 3, gender: boy, neutered: yes
  Given As a user I sign up for no of pets 3 and gender is boy and is neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 1, gender: boy, neutered: no
  Given As a user I sign up for no of pets 1 and gender is boy and is not_neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 2, gender: boy, neutered: no
  Given As a user I sign up for no of pets 2 and gender is boy and is not_neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 3, gender: boy, neutered: no
  Given As a user I sign up for no of pets 3 and gender is boy and is not_neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 1, gender: girl, neutered: yes
  Given As a user I sign up for no of pets 1 and gender is girl and is neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 2, gender: girl, neutered: yes
  Given As a user I sign up for no of pets 2 and gender is girl and is neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 3, gender: girl, neutered: yes
  Given As a user I sign up for no of pets 3 and gender is girl and is neutered
  
@smoke
Scenario: Test happy path with combination of no.of.pets: 1, gender: girl, neutered: no
  Given As a user I sign up for no of pets 1 and gender is girl and is not_neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 2, gender: girl, neutered: no 
  Given As a user I sign up for no of pets 2 and gender is girl and is not_neutered

@smoke
Scenario: Test happy path with combination of no.of.pets: 3, gender: girl, neutered: no
  Given As a user I sign up for no of pets 3 and gender is girl and is not_neutered