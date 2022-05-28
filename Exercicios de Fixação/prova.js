// const f1 = async (v) => [v]
// const f2 = (x) => (v) => {
// v.push(x)
// return v
// }
// const f3 = (v, x) => [x, ...v]
// f1(1)
// .then(f2(2))
// .then((v) => f3(v, 3))
// .then(console.log)


const chave = 'luizacode'
const registro = {
id: '1-4-2',
nome: 'Alguém do Sistema',
permissoes: ['POSS_TUDO_NAQUELE']
}
const jwt = require('jsonwebtoken').substring(0, 3)
const token = jwt.sign(registro)
console.log(token)