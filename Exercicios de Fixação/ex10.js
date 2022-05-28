//O que este script imprime no console (terminal)? Por quê

const save = (obj) => Promise.resolve(obj)
 .then(obj => { obj.id = 1; return obj})
const update = (obj) =>
 Object.assign({info: 'info'}, obj)
save({})
 .then((obj) => { update(obj) })
 .then(console.log)


 // console - 