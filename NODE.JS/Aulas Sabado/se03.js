let venda = 2_001
// Comissão:
let comissao = null
// Se o vendedor vender até 1000, ele recebe 20
if (venda <= 2000) {
    comissao = 20
} else if (venda <= 1000) {
    // Se ele vender entre 1000 e 2000, ele recebe 50
    comissao = 50
} else {
    // se ele vender mais que 2000 ele recebe 100
    comissao = 100
}
console.log(`Comissão da venda $${venda}: ${comissao}`)