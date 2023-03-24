function login() {
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-0').click().type('deepa.nayak@iota.klaar.team');
    cy.get('.ant-form-item-control-input-content > .ng-tns-c190-1').click().type('Klaar2021');
    cy.wait(2000);
    cy.get('#login-btn').click();
    cy.wait(4000);
    cy.pause();
}

function profileToggleOff() {
    cy.get('[data-cy="settings-customize-my-strength-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(5000);
    cy.wait(5000);
    cy.get('[data-cy="settings-customize-my-skills-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(5000);
}

function profileToggleOn() {
    cy.get('[data-cy="settings-nav-menu-button"]').click({ force: true });
    cy.wait(5000);
    cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(2) > [data-cy="submenu-button"]').click();
    cy.wait(3000);
    cy.get('[data-cy="settings-customize-my-strength-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(5000);
    cy.wait(5000);
    cy.get('[data-cy="settings-customize-my-skills-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(2000);
}

function toggleOn() {
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.get('[data-cy="settings-customize-teams-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(4000);
    cy.wait(4000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(2000);
    cy.get('[data-cy="settings-customize-health-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(2000);
}

function toggleOff() {
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.get('[data-cy="settings-customize-teams-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(4000);
    cy.wait(4000);
    cy.scrollTo('bottom', { ensureScrollable: false });
    cy.wait(2000);
    cy.get('[data-cy="settings-customize-health-module-switch-button"] > .ant-switch').click({ force: true });
    cy.wait(2000);
}

beforeEach(() => {
    cy.visit('https://dev.klaarhq.com/');
});

describe('Customise Modules', function() {
    it('Test toggle on/off for profile module - My Strength and My Skills', function() {
        login();
        cy.get('[data-cy="settings-nav-menu-button"]').click({ force: true });
        cy.wait(5000);
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(2) > [data-cy="submenu-button"]').click();
        cy.wait(3000);
        cy.pause();
        profileToggleOff();
        cy.get('[data-cy="profile-nav-menu-button"]').click({ force: true });
        cy.wait(5000);
        cy.pause();
        profileToggleOn();
        cy.get('[data-cy="profile-nav-menu-button"]').click({ force: true });
        cy.wait(5000);
    });

    it('Test toggle on/off for Teams module and Health module', function() {
        login();
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.wait(5000);
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(2) > [data-cy="submenu-button"]').click();
        cy.wait(2000);
        toggleOff();
        toggleOn();
        cy.get('[data-cy="teams-nav-menu-button"] > .tw-h-16').click();
        cy.contains('p', 'Teams').should('be.visible');
        cy.get('[data-cy="health-nav-menu-button"] > .tw-h-16').click();
        cy.contains('p', 'Health').should('be.visible');
    })
})