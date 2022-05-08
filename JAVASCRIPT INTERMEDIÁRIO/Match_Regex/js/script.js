var plate = 'FJQ-5837';

console.log(placa.match(/^[A-Z]{3}\-\d{4}$/g));

// começa e termina sempre com uma "/" expressão regular
// ela possui um conjunto de instruções 
// ela possui flags (global = g / multiline = m / Insisitive = i - Não vai fazer distinçaõ de caracter maiusculo e minusculo)

const reg1 = /^[A-Z]{3}\-\d{4}$/gmi //Placa de Carro
const reg2 = /^[0-9]{2}\/[1-9]{2}\/[1-9]{4}/   // DATA
const reg3 = /^[a-zA-Z]+\s[a-zA-Z]+$/ //Nome Completo com apenas 1 espaço (Nome Sobrenome)
const reg4 = /^\d{3}\.\d{3}\.\d{3}\-\d{2}/gmi //CPF
const reg5 = /^\d{2}\.\d{3}\.\d{3}\/[0-1]{4}\-\d{2}/gmi // CNPJ