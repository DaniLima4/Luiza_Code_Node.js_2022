// Array de números e contar os pares
const array = [1,2,3,4,5,6]
let contarPar = 0

for (let indice=0; indice < array.length; indice++) {
    if (array[indice] % 2 === 0) {
        contarPar++
    }
}
console.log('Temos ', contarPar, ' números pares')