/// <reference types="cypress" />

import interation from "../Action/interaction";

Given(/^que o usuario está no site principal do sistema$/, () => {
	cy.visit("");
});

When(/^o usuario acessar a seção "([^"]*)"$/, (session) => {
	cy.visit(session);
});

When(/^clicar no link "([^"]*)"$/, (text) => {
    interation.clicarPorTexto(text)
});
