Feature: Teste1

Como usuario, desejo acessar o site placeholder e visualizar os dados.

Background:
   Given que o usuario está no site principal do sistema

Scenario: Validar dados do guide
    When o usuario acessar a seção "/guide/"
    Then deverá capturar os dados exibidos salvando em arquivo json
    And validar os dados

Scenario: Validar dados das fotos
    When o usuario acessar a seção "/guide/"
    And clicar no link "/albums/1/photos"
    Then deverá capturar todos os dados exibidos salvando em arquivo json
    And validar os dados do objeto com id "6"