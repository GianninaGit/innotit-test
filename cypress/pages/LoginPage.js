class LoginPage {
    constructor() {
        this.locators = {
            usernameInput: '#username',
            passwordInput: '#password',
            loginButton: 'button[type="submit"]',
            flashMessage: '#flash',
        };
    }

    visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }

    login(username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }

    fillUsername(username) {
        const input = cy.get(this.locators.usernameInput).clear();
        if (username) {
            input.type(username);
        }
    }

    fillPassword(password) {
        const input = cy.get(this.locators.passwordInput).clear();
        if (password) {
            input.type(password);
        }
    }

    submit() {
        cy.get(this.locators.loginButton).click();
    }

    verifySuccessMessage(expectedText) {
        this.getFlashMessage().should('contain.text', expectedText);
    }

    getFlashMessage() {
        return cy.get(this.locators.flashMessage);
    }

    verifyErrorMessage(expectedText) {
        this.getFlashMessage().should('contain.text', expectedText);
    }

}

export default LoginPage;
