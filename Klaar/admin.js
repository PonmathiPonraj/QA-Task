function adminUser() {
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-0').click().type('deepa.nayak@iota.klaar.team');
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-1').click().type('Klaar2021');
    cy.wait(2000);
    cy.get('#login-btn').click();
    cy.wait(4000);
    cy.pause();
}

function nonAdminUser() {
    cy.get('#email-field').click().type('arya.mahato@iota.klaar.team');
    cy.get('#password-field').click().type('Klaar2021');
    cy.wait(2000);
    cy.get('#login-btn').click();
    cy.pause();
}

beforeEach(() => {
    cy.visit('https://dev.klaarhq.com/');
});

describe('Admin User and Non Admin User', function() {
    it('Verify Workspace settings is only visible to the admin user and not visible to the non-admin user.', function() {

        //Admin User
        adminUser();
        cy.get('[data-cy="settings-nav-menu-button"]').click({ force: true });
        cy.wait(5000);
        cy.url('https://dev.klaarhq.com/settings/workspace/details').should('exist');
        // cy.title().should('include', 'Workspace Settings')
        cy.wait(2000);
        cy.get('[data-cy="profile-settings-button"] > .anticon > svg').click({ force: true });
        cy.get('[data-cy="logout-button"]').click({ force: true });
        cy.wait(5000);

        //Non Admin User
        nonAdminUser();
        cy.get('[data-cy="settings-nav-menu-button"]').click({ force: true });
        cy.wait(2000);
        cy.url('https://dev.klaarhq.com/settings/groups').should('exist');
    });
});