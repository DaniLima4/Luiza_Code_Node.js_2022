var person = {
        name: "Eduardo",
        contact:{
            email: "danielal.r@hotmail.com",
            phone: "(11)4002-8922",
        },
        adress: {
            street: "xxxx",
            city: "São Paulo",
            state: "SP"
        }
}

var fruit = ['apple', 'pear', 'grape', 'pineapple']

var {name, contact, adress} = person
var {email} = person.contact
var {city} = adress

// var [f1,f2] = fruit
var [,,,pineapple] = fruit

console.log(name, email, city, pineapple)