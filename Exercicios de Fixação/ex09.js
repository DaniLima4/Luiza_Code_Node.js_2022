//Deste script, qual é a saída o console/terminal? (Por quê?)

const f = (obj) => Promise.resolve(obj)
 .then((obj) => ++obj.x)
const sample = { x:1}
const promise1 = f(sample)
const promise2 = promise1
promise1
 .then(promise2)
 .then(console.log)


 //saída: 2 - Acréscimo de +1 e cima do valor de x no sample 