class Pessoa {
    // static - Propriedade - atribuir valor comum 
    static IDADE_PADRAO = 18  

    constructor(idade){  
        this.idade = idade || 18
    }
    idade = 18 
}


const pessoa1 = new Pessoa() 

console.log('p1.idade', pessoa1.idade)
console.log('p1.IDADE_PADRÃO', pessoa1.IDADE_PADRAO)
console.log('pessoa.idade', Pessoa.idade)
console.log('pessoa.IDADE_PADRÃO ',Pessoa.idade)

