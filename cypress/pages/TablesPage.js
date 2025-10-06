class TablesPage {
    constructor() {
        this.locators = {
            table1: '#table1',
            headers: '#table1 th',
            tbodyRows: '#table1 tbody tr'
        };
    }

    visit() {
        cy.visit('/tables');
    }

    getDueOfRow(rowIndex) {
        return cy.get(`${this.locators.tbodyRows}`).eq(rowIndex).find('td').eq(3);
    }

    sortByHeader(headerText) {
        cy.get(this.locators.headers)
            .contains(headerText)
            .click();
    }
}

export default TablesPage;
