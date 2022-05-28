// Array de números e contar os pares
const array = []
let contarPar = 0
let indice = 0
do {
    if (array[indice] % 2 === 0) {
        contarPar++
    }
    indice++
} while (indice < array.length)

console.log('Temos ', contarPar, ' números pares')