const array = ['a', 'b', 'c']

const procurado = 'b'
const contemB = false
for (let i = 0;  i < array.length; i++) {
    if (array[i] === procurado) {
        contemB = true
        break
    }
}
