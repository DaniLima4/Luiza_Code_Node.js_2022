let base = 1

function inc(valor) {
    valor =+ base
    base++
    return valor
}

console.log('Estagio 1', inc(10))
console.log('Estagio 2', inc(10))