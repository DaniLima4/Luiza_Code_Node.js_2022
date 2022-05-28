// Array de números e contar os pares
const array = [1,2,3,4,5,6]
let contarPar = 0
let indice =0 
for (; ;) {
    if (indice >= array.length) {
        break
    }
    if (array[indice] % 2 === 0) {
        contarPar++
    }
    indice++
}
console.log('Temos ', contarPar, ' números pares')