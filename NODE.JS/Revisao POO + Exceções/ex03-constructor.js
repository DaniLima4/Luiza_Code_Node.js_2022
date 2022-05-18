class Pessoa {
    // this - referencia o objeto corrente 
    constructor(idade=18){  
        this.idade = idade
    }
    idade = 18 //atributo ou propriedade de instância
}


//Cada uma é uma pesssoa (objeto)
//Construtor é chamado com New - criar a instância da classe

const pessoa1 = new Pessoa() // valor de idade 18
const pessoa2 = new Pessoa(13) // valor idade 13

console.log('p1 antes', pessoa1.idade)
console.log('p2 antes', pessoa2.idade)

pessoa1.idade = 12


console.log('p1 ', pessoa1.idade)
console.log('p2 ', pessoa2.idade)

