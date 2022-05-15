let x = 1

function f(outrox) {
    outrox += 2
    console.log('f()', outrox)
}

console.log('Antes:', x)
f(x)
console.log('Depois:', x)