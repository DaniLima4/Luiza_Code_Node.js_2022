// ESCREVA UM OBJETO E FAÇA UMA CÓPIA DELE 
// USANDO O EXERCICIO ANTERIOR, ALTERE QUALQUER CHAVE DESSE OBJETVO COM OUTRO VALOR 
// ESCREVA SEU NOME E SEPARE-O USANDO A SINTAXE SPREAD OPERATOR EM UM ARRAY



var person = {
    name: "Eduardo",
    age: 29,
    sex: "Masculino",
    contact: {
        email: "abcd@hotmail.com",
        phone: "XXXX-XXXX",
    },
    state: "São Paulo",
    profession: "Dev",
    company: "Magalu",
}


var changeperson = { 
    ...person, name:"Daniela", 
    contact: { ...person.contact, phone: "AAAAAAA"}}
var returnperson = {...person, ...changeperson }


var spreadArray = [ ...changeperson.name]

console.log(changeperson, spreadArray)