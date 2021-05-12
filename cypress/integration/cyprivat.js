describe('Mobile phone replenishment', () => {

it('type', () => {
    cy.visit('/')
    cy.get('[data-qa-node="phone-number"]')
      .type('123456789')
  })

it('focus', () => {
    cy.visit('/')
    cy.get('[data-qa-node="amount"]')
      .focus()
  })
  
it('blur', () => {
    cy.visit('/')
    cy.get('[data-qa-node="amount"]')
      .focus()
      .blur()
  })
  
it('clear', () => {
    cy.visit('/')
    cy.get('[data-qa-node="amount"]')
      .focus().type(123)
      .wait(1500)
      .clear()
  })
  
it('submit', () => {
    cy.visit('/')
    cy.get('form[method="post"]')
      .submit()
  })
  
it('click', () => {
    cy.visit('/')
    cy.get('[data-qa-value="manual"]')
      .click()
  })
  
it('rightclick', () => {
  cy.visit('https://example.cypress.io/commands/actions')
  .contains('Right click to edit')
      .rightclick()
    
  })

it('doubleclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Double click to edit')
      .dblclick()
})
  
it('check', () => {
    cy.visit('https://facebook.com/reg?')
    .get('input[value="2"]')
    .check()
  })
  
it('uncheck', () => {
    cy.visit('https://en.privatbank.ua')
    .get('#switch-input')
      .check({force: true}).wait(1000)
      .uncheck({force: true})
  })
  
it('select', () => {
  cy.visit('https://facebook.com/r.php?locale=en_US')
    .get('#month')
    .select('May')
    .get('#day')
    .select('3')
    .get('#year')
    .select('1992')
})
  
  it('scrollintoview', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="lang"]')
     .scrollIntoView()
  })

it('scrollto', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .wait(2000)
    .scrollTo(0, 500)
    })
  
it('trigger', () => {
  cy.visit('https://next.privat24.ua/?lang=en')
    .contains('Services')
    .wait(2000)
    .trigger('mouseover')
  })
})