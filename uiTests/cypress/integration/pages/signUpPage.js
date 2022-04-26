/* eslint-disable no-undef */
module.exports = ({
    continue() { return cy.get('.z-20'); },
    no_of_cats_is_1() { return cy.get('[for="1"]'); },
    no_of_cats_is_2() { return cy.get('[for="2"]'); },
    no_of_cats_is_3() { return cy.get('[for="3"]'); },
    pet_name() { return cy.get('#name-input'); },
    boy_gender() { return cy.get('[for="Boy"]'); },
    girl_gender() { return cy.get('[for="Girl"]'); },
    yes_neutered() { return cy.get('[for="neutered_Yes"]'); },
    not_neutered() { return cy.get('[for="neutered_No"]'); },
    breed_name() { return cy.get('[style=""] > .justify-center > .relative > .w-full'); },
    kittens() { return cy.get('[for="Kitten"]'); },
    no_of_months() { return cy.get('[for="months_4"]'); },
    no_of_weeks() { return cy.get('[for="weeks_2"]'); },
    raw_food() { return cy.get('[for="Raw"]') },
    food_brand(){ return cy.get('#brandQuestion > .justify-center > .relative > .w-full'); },
    food_type() { return cy.get('[for="FRESH_IS_BEST"]') },
    cat_behaviour() { return cy.get('[for="NOT_FUSSY"]') },
    cat_weight() { return cy.get('div[class="w-full mb-4 text-xl ml-4"]') },

    cat_is_active() { return cy.get('[for="Active"]') },
    cat_weight_just_right() { return cy.get('[for="Just right"]') },
    cat_picture() { return cy.get(':nth-child(1) > .h-24')},
    cat_gain_weight() { return cy.get('[for="gain-weight"]') },
    no_button_cat_behaviour() { return cy.get(':nth-child(9) > .w-full.px-4 > .bg-katkin-indigo') },
    customer_name() { return cy.get(':nth-child(12) > :nth-child(2) > .px-4') },
    customer_email() { return cy.get(':nth-child(12) > :nth-child(3) > .px-4') },
    customer_postcode() { return cy.get('#postcode-entry-section > .px-4') },

    
  });
  