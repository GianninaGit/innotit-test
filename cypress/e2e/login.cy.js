import LoginPage from '../pages/LoginPage';

describe('Login tests', () => {
    const loginPage = new LoginPage();
    const VALID_USERNAME = Cypress.env('USERNAME');
    const VALID_PASSWORD = Cypress.env('PASSWORD');

    beforeEach(() => {
        loginPage.visit();
    });

    it('Login exitoso con credenciales válidas', () => {
        loginPage.login(VALID_USERNAME, VALID_PASSWORD);
        loginPage.verifySuccessMessage('You logged into a secure area!');
    });

    it('Login falla con usuario incorrecto', () => {
        loginPage.login('wronguser', VALID_PASSWORD);
        loginPage.verifyErrorMessage('Your username is invalid!');
    });

    it('Login falla con contraseña incorrecta', () => {
        loginPage.login(VALID_USERNAME, 'wrongpassword');
        loginPage.verifyErrorMessage('Your password is invalid!');
    });

    it('Login falla con campos vacíos', () => {
        loginPage.login('', '');
        loginPage.verifyErrorMessage('Your username is invalid!');
    });

});
