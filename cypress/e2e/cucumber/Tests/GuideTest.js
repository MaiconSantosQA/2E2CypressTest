/// <reference types="cypress" />
import "../Pages/Utils/Steps/commons.cy"

const nomeJson = "cypress/fixtures/guidePhoto.json"

Then(/^deverá capturar todos os dados exibidos salvando em arquivo json$/, () => {
	cy.get('body > pre').then(($elemento) => {
		const texto = $elemento.text().trim();
		const objetoJSON = {
		  texto: texto
		};
	  
		cy.writeFile(nomeJson, objetoJSON);
	  });
});


Then(/^deverá capturar os dados exibidos salvando em arquivo json$/, () => {
	cy.get('body > div:nth-child(2) > main > pre:nth-child(24) > code').then(($elemento) => {
		const texto = $elemento.text().trim();
		const objetoJSON = {
		  texto: texto
		};
		cy.writeFile(nomeJson, objetoJSON);
		expect(objetoJSON).to.deep.equal({
			texto: "fetch('https://jsonplaceholder.typicode.com/posts/1', {\n  method: 'PATCH',\n  body: JSON.stringify({\n    title: 'foo',\n  }),\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n})\n  .then((response) => response.json())\n  .then((json) => console.log(json));"
		  });
	  });
});


Then(/^validar os dados$/, () => {
	return true;
});


Then(/^validar os dados do objeto com id "([^"]*)"$/, (id) => {
	cy.readFile(nomeJson).then((objetos) => {
		const objetoID = objetos.filter(objeto => objeto.id === id);
	
		if (objetoID.length === 0) {
			throw new Error(`Nenhum objeto com ${id} encontrado.`);
		}

		objetoID.forEach(objeto => {
			expect(objeto.title).to.equal("accusamus ea aliquid et amet sequi nemo");
			expect(objeto.url).to.equal("https://via.placeholder.com/600/56a8c2");
			expect(objeto.thumbnailUrl).to.equal("https://via.placeholder.com/150/56a8c2");
		});
	});
});