import TablesPage from '../pages/TablesPage';

describe('Tables tests', () => {
    const tablesPage = new TablesPage();

    beforeEach(() => {
        tablesPage.visit();
    });

    it('Validar Due de Tabla 1 - Fila 2 ANTES y DESPUÉS de ordenar por Lastname descendente', () => {
        // Bach $51.00
        tablesPage.getDueOfRow(1).should('have.text', '$51.00');

        tablesPage.sortByHeader('Last Name');

        // Conway $50.00
        tablesPage.getDueOfRow(1).should('have.text', '$50.00');
    });
});
