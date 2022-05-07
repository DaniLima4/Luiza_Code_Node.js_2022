// scope- contexto atual do código 
// escopo global - variaveis, funções que podem ser acessadas de qualquer parte do código
//escopo local - variaveis, funções que podem ser acessadas e manipuladas apenas dentro do contexto/codigo especifico

//variavel global 
let universo = "Solar";

function exibirPlanetas(){

        //variavel local
        let planetas = ["Marte","Terra","júpter"]
        console.log(planetas);
        console.log(universo);
};

console.log(universo);
exibirPlanetas();


