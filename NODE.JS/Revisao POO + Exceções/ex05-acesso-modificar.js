class Pessoa {
    constructor(idade = 18){  
        this._idade = idade 
    }
    //metodo de acesso - leitura e retorno
    get idade () {
        return this._idade
    }
    //metodo modificador
    set idade (novaIdade) {
                this._idade = novaIdade
    }
}


const p1 = new Pessoa(22) 

console.log('idade antes', p1.idade)

p1.idade = 20

console.log('idade depois', p1.idade)

console.log('_idade', p1._idade)


