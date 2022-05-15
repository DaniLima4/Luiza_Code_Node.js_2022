
function somar(x, y=1) {
    return x + y
}

function executar() {
    const x = 10
    const y = 20
    const z = somar(x)
    console.log('Resultado> ', z)
    const z2 = somar(x,y)
    console.log('Resultado2> ', z2)
}

executar()