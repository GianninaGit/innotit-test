import DropdownPage from '../pages/DropdownPage';

describe('Dropdown tests', () => {
    const dropdownPage = new DropdownPage();

    beforeEach(() => {
        dropdownPage.visit();
    });

    it('Validar estado inicial del dropdown', () => {
        dropdownPage.verifyDefaultOption();
    });

    it('Seleccionar Option 1 y validar', () => {
        dropdownPage.selectOption('1');
        dropdownPage.verifySelected('1');
    });

    it('Seleccionar Option 2 y validar', () => {
        dropdownPage.selectOption('2');
        dropdownPage.verifySelected('2');
    });
});
