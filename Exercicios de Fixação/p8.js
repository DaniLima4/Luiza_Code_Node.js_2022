//Quais são os valores das variáveis j e k após executarmos este script:

function Incrementador(valorBase) {
this.valor = valorBase
this.incrementar = () => ++this.valor
}
const i = new Incrementador(10)
const j = i.incrementar()
const k = i.incrementar()
console.log(`j=${j},k=${k}`)



// resultado: j=11,k=12