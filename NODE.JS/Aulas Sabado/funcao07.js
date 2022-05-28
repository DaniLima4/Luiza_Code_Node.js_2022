function somar(x) {
    return x + 1
}

function multiplicar(x) {
    return x * 4
}

Promise.resolve(3)
    .then(somar)
    .then(multiplicar)
    .then(console.log)
    .catch(console.error)