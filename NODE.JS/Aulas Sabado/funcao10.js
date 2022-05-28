// Comissão
// Se a pessoa for um vendedor. A comissão dela é 10% da venda
// Se a pessoa for um supervisor. A comissão dela é 20% da venda.
function calcularComissao(tipoVendedor, valorVenda) {
    if (tipoVendedor === 'vendedor') {
        return valorVenda * 0.1
    }
    return valorVenda * 0.2
}
function executar() {
    const tipoVendedor = 'supervisor'
    const valorVenda = 1000
    const valorDaComissao = calcularComissao(tipoVendedor, valorVenda)
    console.log('Valor da comissão:', valorDaComissao)
}
executar()