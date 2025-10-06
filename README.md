# InnotIT Automation Test

This repository contains an automated suit of test using Cypress to test the web application [The Internet](https://the-internet.herokuapp.com). 
The goal of this project is to desmostrate automation testing skills. 

## Structure
cypress/ ├── e2e/ │ ├── dropdown.cy.js │ ├── login.cy.js │ └── tables.cy.js ├── pages/ │ ├── DropdownPage.js │ ├── LoginPage.js │ └── TablesPage.js └── support/ └── e2e.js

## Test scripts
Defined in package.json
```bash
# Run individual suites
npm run cy:dropdown
npm run cy:login
npm run cy:tables

# Open Cypress Test Runner
npm run cy:open

# Run all tests
npm run cy:run
```

## Credentials
This project uses the credentials provided on The Internet demo site.
They are not included in the repository for security reasons and are stored locally in cypress.env.json (ignored by .gitignore).
