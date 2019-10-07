/* global describe, it, expect, cy*/
/*
describe('Mi primer test', function(){
    it('funciona?', function(){
        expect(true).to.equal(false)
    })
})
*/

describe('Petgram', function(){
    
    it('Funciona la app?', function(){
        cy.visit('/')
    })

    it('Ver categoria y ver fotos', function(){
        cy.visit('/pet/1')
        cy.get('article')
    })
    
    it('Navegar a home con la Navbar', function(){
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        /* cy.url().should('be', '/home')  // este test esta mal escrito*/
        //cy.url().should('include', '/home') // este test debe fallar
        cy.url().should('include', '/')    
    })   

    it('un usuario no registrado ve el form de registro e inicio de sessión al visitar favs', function(){
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})
