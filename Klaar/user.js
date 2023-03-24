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

describe('User list -> All Users', function() {
    it('Write a test to add a single user', function() {
        login();
        cy.get('[data-cy="settings-nav-menu-button"]').click({ force: true });
        cy.wait(5000);
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click({ force: true });
        cy.wait(3000);
        cy.get('[data-cy="settings-user-list-add-user-button"]').click({ force: true });
        cy.wait(3000);
        cy.get('[data-cy="settings-add-user-full-name-text-field"]').click().type('Ponmathi Ponraj').blur();
        cy.get('[data-cy="settings-add-user-email-text-field"]').click().type('ponmathiponraj03@gmail.com').blur();
        cy.get('.ant-select-selection-item').click().type('Legal{enter}').blur();
        cy.get('[data-cy="settings-add-user-select-title-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click().type('Chief Intranet Executive {enter}').blur();
        cy.get('[data-cy="settings-add-user-select-manager-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click().type('aa (aagg@gmail.com) {enter}').blur();
        cy.get('[data-cy="settings-add-user-id-text-field"]').click().type('user1403');
        cy.get('[data-cy="settings-add-user-location-text-field"]').click().type('Tamil Nadu');
        cy.get('[data-cy="settings-add-user-select-hrbp-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click().type('aa (aa@aa.aa) {enter}');
        cy.get('[data-cy="modal-submit-button"]').click({ force: true });
    })
})