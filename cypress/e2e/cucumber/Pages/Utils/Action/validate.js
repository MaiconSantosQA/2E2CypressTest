const el = require("../elements").ELEMENTS;

class UTILSVALIDATE {

  validarDuasMensagens(msg1,msg2){
    cy.contains(msg1).should('be.visible')
    cy.contains(msg2).should('be.visible')
  }

  validarBotaoNExistentePorTexto(texto){
    cy.contains('button', texto, { timeout: 2000 }).should('not.exist')
  }
  
  validarBotaoSalvarDesabilitado(){
    this.validarBotaoDesabilitadoPorTexto("Salvar")
  }

  validarBotaoEnviarDesabilitado(){
    this.validarBotaoDesabilitadoPorTexto("Enviar")
  }

  validarBotaoDesabilitadoPorTexto(texto){
    cy.contains('button', texto).should('be.disabled')
  }

  validarBotaoHabilitadoPorTexto(texto){
    cy.contains('button', texto).should('be.enabled').and('be.visible')
  }

  validarTextoEmTela(msg){
    cy.contains(msg).should('be.visible')
  }

  
  validarTextoEmTelaBolean(msg){
      cy.contains(msg, { timeout: 5000 }).should('not.exist');
  };
  

  verificarStatusCBX(value, status) {
    const checkbox = cy.xpath(el.xpathCbxForValue.replace('${value}', value));
  
    if (status === "checked") {
      checkbox.should("be.checked");
    } else {
      checkbox.should("not.be.checked");
    }
  }
}

export default new UTILSVALIDATE();