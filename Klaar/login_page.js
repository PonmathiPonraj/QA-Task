describe('Test Login Page', function() {
    it(`Visit Klaar website 'https://dev.klaarhq.com' You will be taken to Klaar’s login page.`, function() {
        cy.visit('https://dev.klaarhq.com/');
    });

    it('Login as Admin and verify which page you have landed on.', function() {
        cy.get('.ant-form-item-control-input-content > .ng-tns-c190-0').click().type('deepa.nayak@iota.klaar.team');
        cy.get('.ant-form-item-control-input-content > .ng-tns-c190-1').click().type('Klaar2021');
        cy.wait(2000);
        cy.get('#login-btn').click();
        cy.wait(4000);
        cy.url().should('eq', 'https://dev.klaarhq.com/profile');
        cy.get('span.tw-braek-words').contains('Profile');
        cy.pause();
    });
});