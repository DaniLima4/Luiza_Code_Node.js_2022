//METODOS DA INSTÂNCIA/DO OBJETO - FUNÇÃO SÓ ÉEXECUTADA QUANDO O OBJETO FOR INSTÂNCIADO 
// INSTÂNCIADO - NEW 


class Pessoa {
    constructor(idade = 18){  
        this.idade = idade 
    }
    dobrarIdade(){
        return new Pessoa(this.idade*2)
    }
}
    const p1 = new Pessoa(22)
    console.log('p1.idade', p1.idade)
    const p2 = p1.dobrarIdade()
    console.log('p2.idade', p2.idade)