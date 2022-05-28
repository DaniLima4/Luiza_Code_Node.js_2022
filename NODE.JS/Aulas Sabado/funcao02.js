// Contar os números pares
function executar() {
    const array = [1, 2, 3, 4, 5, 6]
    // contar os números pares
    const quantidadeNumerosPares = contarNumerosPares(array)
    imprimirQuantidadeNumerosPares(quantidadeNumerosPares)
}
function verificarEhPar(valorNumerico) {
    return valorNumerico % 2 === 0
}
function contarNumerosPares(array) {
    let contador = 0
    for (let i=0; i < array.length; i++) {
        if (verificarEhPar(array[i])) {
            contador++
        }
    }
    return contador
}
function imprimirQuantidadeNumerosPares(quantidadeNumerosPares) {
    console.log('Quantidade de números pares:', quantidadeNumerosPares)
}

executar()