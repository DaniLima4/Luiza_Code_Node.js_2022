

// A - Operador de concatenação de strings (+)

var nome = 'Ademir'

var sobNome = 'Braga'

// // var concatenacao = nome + sobNome

// var conca = nome + ' ' + sobNome


var conca = `${nome} ${sobNome}`

console.log(conca)


// B- Ternário - Possui 3 operandos; atalho da função
// Condição ? true - Valor 1 ; False - Valor 2

var a = 1 
var b = 2

console.log(
    a === 1 ? (b === 2 ? 'b = 2' : 'Valor incorreto' ) : 'Não encontrei'
)
