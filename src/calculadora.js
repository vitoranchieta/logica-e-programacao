function somarDoisValores(valor1, valor2){
    const resultadoSomaValores = valor1 + valor2;
    return resultadoSomaValores;   
}

function mediaDoisValores(){
    const resultadoMediaValores = somarDoisValores(valor1, valor2) / 2;
    return resultadoMediaValores;
}

module.exports = { somarDoisValores }