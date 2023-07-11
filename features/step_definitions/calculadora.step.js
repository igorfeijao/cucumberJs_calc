const {Given, When, Then } = require('@cucumber/cucumber');
var expect = require('chai').expect;


Given('que acesse a calculadora', function () {
       console.log("Calculadora on") 
  });

  When('eu somar {int} com {int}', function (int, int2) {
        soma = int + int2
  });

  Then('o resultado da soma deve ser {int}', function (int) {
        expect(soma).equal(int)
  });