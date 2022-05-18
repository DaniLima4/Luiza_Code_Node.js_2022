class Pessoa {
    idade = 18 //atributo ou propriedade de instância
}


//Cada uma é uma pesssoa (objeto)
const pessoa1 = new Pessoa()

const pessoa2 = new Pessoa()

console.log('p1 antes', pessoa1.idade)
console.log('p2 antes', pessoa2.idade)

pessoa1.idade = 12


console.log('p1 ', pessoa1.idade)
console.log('p2 ', pessoa2.idade)

