function verificarEhPar(valorNumerico) {
    const ehPar = valorNumerico % 2 === 0
    return ehPar
}

function imprimirResultado(resultado) {
    console.log('É par?', resultado)
}

function executar() {
    // Informa um número
    const numero = 55
    const ehPar = verificarEhPar(numero)
    imprimirResultado(ehPar)    
}

executar()