import DropdownPage from '../pages/DropdownPage';

describe('Dropdown tests', () => {
    const dropdownPage = new DropdownPage();

    beforeEach(() => {
        dropdownPage.visit();
    });

    it('Validar estado inicial del dropdown', () => {
        dropdownPage.verifyDefaultOption();
    });

    ['1', '2'].forEach(option => {
        it(`Seleccionar Option ${option} y validar`, () => {
            dropdownPage.selectOption(option);
            dropdownPage.verifySelected(option);
        });
    });
});
