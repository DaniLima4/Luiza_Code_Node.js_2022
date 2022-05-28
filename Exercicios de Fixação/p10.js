//Qual será o valor da variável chaves?

class Exemplo {
constructor(valor) {
this.valor = valor
}
}
exemplo = new Exemplo(10)
exemplo.x = 3
const chaves = Object.keys(exemplo)
console.log(chaves)


//resultado: (2) ['valor', 'x']