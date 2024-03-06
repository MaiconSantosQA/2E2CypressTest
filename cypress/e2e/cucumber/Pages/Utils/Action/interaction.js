class UTILSACTION {
  
  clicarBotaoPorTexto(text){
    cy.contains('button', text, { timeout: 30000 }).should('be.visible').first().click();
  }

  clicarSpanPorTexto(text){
    cy.contains('span',text).should('be.visible').first().click({force:true});
  }

  clicarInputPorTexto(text){
    cy.contains('input',text).should('be.visible').first().click();
  }

  clicarPorTexto(text){
    cy.contains(text).should('be.visible').click();
  }

  atualizarPagina(){
    cy.reload();
  }
}

export default new UTILSACTION();