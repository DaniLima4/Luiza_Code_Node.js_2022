



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


var changeperson = { ...person, name:"Daniela", contact: { ...person.contact, phone: "AAAAAAA"}}
var returnperson = {...person, ...changeperson }

console.log(returnperson)