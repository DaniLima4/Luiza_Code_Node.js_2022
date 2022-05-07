let listaNumeros = [1,2,3,4,5];
let indexElemento = [0]

//length - tamanho da lista 
//console.log(listaNumeros.length);


//pop()- remover um item no final da nossa lista 
//console.log(listaNumeros.pop());
//console.log(listaNumeros);

//push() - adicionar elemento no fim da nossa lista
//console.log(listaNumeros.push(6));
//console.log(listaNumeros);


//shift() - remove um elemento no inicio da lista
//console.log(listaNumeros.shift());
//console.log(listaNumeros);

//unshift()- adicionar um elemento no inicio da lista 
//console.log(listaNumeros.unshift(0));
//console.log(listaNumeros);

//indexOf()- retorna o indice do elemento da nossa lista;
indexElemento = listaNumeros.indexOf(4);
//console.log(indexElemento);

//splice(pos, quantidade) - remove 1 item pela posição
listaNumeros.splice(indexElemento,1)
console.log("lista: "+listaNumeros)
