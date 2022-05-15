let x = [1]

function f(registro) {
    registro[0] += 2
    console.log('f()', registro)
}

console.log('Antes:', x)
f(x)
console.log('Depois:', x)