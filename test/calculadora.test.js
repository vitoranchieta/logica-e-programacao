const { expect } = require('chai');
const { somarDoisValores } = require('../src/calculadora.js')

describe('Testes da função de soma', function () {

    it('A função deve ser capaz de somar dois números positivos', function () {
        const resultadoDaSoma = somarDoisValores(5, 3);
        expect(resultadoDaSoma).equal(8);
    });
    
    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        const resultadoDaSoma = somarDoisValores(-50, 10);
        expect(resultadoDaSoma).equal(-40);
    });

});
