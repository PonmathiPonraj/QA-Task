function login() {
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-0').click().type('deepa.nayak@iota.klaar.team');
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-1').click().type('Klaar2021');
    cy.wait(2000);
    cy.get('#login-btn').click();
    cy.wait(4000);
    cy.pause();
}

beforeEach(() => {
    cy.visit('https://dev.klaarhq.com/');
});

describe('Workspace Settings', function() {
    it('Verify workspace settings page', function() {
        login();
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.wait(5000);
        cy.url().should('eq', 'https://dev.klaarhq.com/settings/workspace/details');
        cy.get('h2.mb-0').contains('Workspace Settings');
        cy.wait(2000);
        cy.scrollTo('bottom', { ensureScrollable: false });
        cy.get('[data-cy="settings-choose-workspace-logo-button"] > .ng-star-inserted').click({ force: true });
    });
})