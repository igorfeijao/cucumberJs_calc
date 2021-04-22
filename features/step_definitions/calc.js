const { Given, When, Then } = require('@cucumber/cucumber');
var expect = require('chai').expect;

  Given('que eu acesse a calculadora', function () {
    console.log('Calculadora simples')
  });

  When('eu somar {int} com {int}', function (valor1, valor2) {
    soma = valor1 + valor2
    });

  Then('o resultado deve ser {int}', function (total) {
    expect(soma).to.equal(total);
  });