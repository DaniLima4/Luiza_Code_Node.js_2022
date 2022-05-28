/// Criar uma closure (função que lembra) para incrementar um 
// numero conforme a 'base de lembrança'

function geradorInc(base) {
    return function(valor) {
        return valor + base
    } 
}

function executar() {
    const inc1 = geradorInc(1)
    const inc2 = geradorInc(2)
    console.log(1, inc1(1))
    console.log(2, inc2(1))
}

executar()