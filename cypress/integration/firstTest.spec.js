// describe('Mobile phone replenishment', () => {

// const { it } = require("mocha")

//   it('Check min sum', () => {
    
//   })
// })
// describe('first group test', () => {
//   it('by id', () => {
//   cy.visit('https://facebook.com');
//   cy.get('#email');
// })

//   it('by class', () => {
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
//     cy.get('.DocSearch-Button');
//   })

//   it('by tag', () => {
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
//     cy.get('nav');
//   })
//   it('by tag', () => {
    
//   })
// })


describe('find', () => {
  it('using get with find and eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open');
    cy.get('tbody').find('td').find('div').find('button').eq(0)
  })
   it.only('using get with find and eq', () => {
    cy.visit('https://docs.cypress.io/api/commands/eq');
    cy.get('.scrollactive-nav').find('li').eq('0')
  })
})