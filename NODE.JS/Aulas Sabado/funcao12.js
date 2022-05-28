function calcularComissaoVendedor(valorVenda) {
    return valorVenda * 0.1
}
function calcularComissaoSupervisor(valorVenda) {
    return valorVenda * 0.2
}
function geradorCalculadorComissao(tipoVendedor) {
    return (tipoVendedor === 'vendedor') ? 
        calcularComissaoVendedor :
        calcularComissaoSupervisor
}
function executar() {
    const tipoVendedor = 'supervisor'
    const valorVenda = 1000
    const calcularComissao = geradorCalculadorComissao(tipoVendedor)
    const valorDaComissao = calcularComissao(valorVenda)
    console.log('Valor da comissão:', valorDaComissao)
}
executar()