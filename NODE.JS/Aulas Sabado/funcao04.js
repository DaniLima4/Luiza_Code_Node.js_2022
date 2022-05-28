
function somar(...array) {
    console.log('SOMAR:', array)
    let soma = 0
    for (let i=0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}

function executar() {
    console.log(somar())
    console.log(somar(1))
    console.log(somar(1,2))
    console.log(somar(1,2,3))
}

executar()