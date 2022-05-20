//METODOS EXECUTADO A PARTIR DA CLASSE - STATIC 


class Pessoa {
    constructor(idade = 18){  
        this.idade = idade 
    }
    static somarIdadePessoas(pessoas){
        const somarIdade = (soma, pessoa) => soma + pessoa.idade
        return pessoas.reduce(somarIdade, 0)
    }
}

const pessoas = [
    new Pessoa(11),  new Pessoa(12),  new Pessoa(14), 
]

const somaIdades = Pessoa.somarIdadePessoas(pessoas)
console.log ('Soma Idades: ', somaIdades)


//Sem static não soma as idades 
