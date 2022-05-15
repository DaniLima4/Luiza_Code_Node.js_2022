function calcularComissaoGeral(percentual) {
    percentual = percentual
    function calcularReal(valorVenda) {
        return valorVenda * percentual
    }
    return calcularReal
}
function geradorCalculadorComissao(tipoVendedor) {
    return (tipoVendedor === 'vendedor') ? 
        calcularComissaoGeral(0.1) :
        calcularComissaoGeral(0.2)
}
function executar() {
    const tipoVendedor = 'supervisor'
    const valorVenda = 1000
    const calcularComissao = geradorCalculadorComissao(tipoVendedor)
    const valorDaComissao = calcularComissao(valorVenda)
    console.log('Valor da comissão:', valorDaComissao)
}
executar()