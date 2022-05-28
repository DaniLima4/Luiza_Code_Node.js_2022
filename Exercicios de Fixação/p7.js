// Qual é o valor da variável saida ao executar este script:

class ComissaoGeral {
static calcular(valor) {
return valor * 0.1
}
}
class ComissaoSupervisor extends ComissaoGeral {
static calcular(valor) {
return super.calcular(valor) + (valor * 0.2)
}
}
const saida = ComissaoSupervisor.calcular(100)
console.log(saida)


//reultado: 30