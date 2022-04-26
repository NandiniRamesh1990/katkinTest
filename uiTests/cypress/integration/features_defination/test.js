import { When } from 'cypress-cucumber-preprocessor/steps';
import Chance from 'chance';
import page from '../pages/signUpPage'
const chance = new Chance(Math.random);

Given('I am at Katkin sign up page',() =>{
    cy.visit('/');
})

When(/^As a user I sign up for no of pets (.*) and gender is (.*) and is (.*)$/, (arg, arg1, arg2) => {

if(arg == 1)
  page.no_of_cats_is_1().click();
else if(arg == 2)
 page.no_of_cats_is_2().click()
else if(arg == 3)
 page.no_of_cats_is_3().click()

  page.continue().click()
  page.pet_name().type(chance.first())
  page.continue().click()

  if(arg1 == "boy")
  page.boy_gender().click()
  else if(arg1 == "girl")
  page.girl_gender().click()

  if(arg2 == "neutered")
  page.yes_neutered().click()
  else if(arg2 == "not_neutered")
  page.not_neutered().click()

  page.continue().click()
  page.breed_name().select('ABYSSINIAN')
  page.continue().click()
  page.kittens().click()
  page.no_of_months().click()
  page.no_of_weeks().click()
  page.continue().click()
  page.raw_food().click()
  page.food_brand().select('ROYAL_CANIN')
  page.continue().click()
  page.food_type().click()
  page.continue().click()
  page.cat_behaviour().click()
  page.continue().click()
  page.cat_weight().type(9)
  page.continue().click()
  page.cat_is_active().click()
  page.continue().click()
  page.cat_weight_just_right().click()
  cy.wait(2000)
  page.cat_picture().should('exist')
  page.continue().click()
  page.no_button_cat_behaviour().click()
  page.continue().click()
  page.no_button_cat_behaviour().click()
  page.continue().click()
  page.cat_gain_weight().click()
  page.continue().click()

  // customer details 
  page.customer_name().type(chance.name())
  page.customer_email().type(chance.email({ length: 2, domain: 'test.com' }))
  page.customer_postcode().type(chance.postcode())
  });

  