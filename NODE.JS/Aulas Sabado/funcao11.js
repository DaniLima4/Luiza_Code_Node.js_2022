function calcularComissaoVendedor(valorVenda) {
    return valorVenda * 0.1
}
function calcularComissaoSupervisor(valorVenda) {
    return valorVenda * 0.2
}
function calcularComissao(tipoVendedor, valorVenda) {
    return (tipoVendedor === 'vendedor') ? 
        calcularComissaoVendedor(valorVenda) :
        calcularComissaoSupervisor(valorVenda)
}
function executar() {
    const tipoVendedor = 'supervisor'
    const valorVenda = 1000
    const valorDaComissao = calcularComissao(tipoVendedor, valorVenda)
    console.log('Valor da comissão:', valorDaComissao)
}
executar()