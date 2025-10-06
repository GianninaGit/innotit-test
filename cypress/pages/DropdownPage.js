class DropdownPage {

    constructor() {
        this.locators = {
            dropdown: '#dropdown',
            placeholderDropdown: 'Please select an option'
        }
    }
    visit() {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    }

    getDropdown() {
        return cy.get(this.locators.dropdown);
    }

    selectOption(value) {
        this.getDropdown().select(value);
    }

    verifySelected(value) {
        this.getDropdown().should('have.value', value);
    }

    verifyDefaultOption() {
        this.getDropdown()
            .find('option:selected')
            .should('contain.text', this.locators.placeholderDropdown)
            .and('be.disabled');
    }
}

export default DropdownPage;
