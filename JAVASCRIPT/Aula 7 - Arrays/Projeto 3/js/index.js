let exemplo = [1,2,3,4,5];
let exemplodois = new Array ("João","José","Maria");


/* push coloca no final */
exemplodois.push("Marta");
console.log(exemplodois);



/* push coloca no começo */
exemplodois = new Array ("João","José","Maria");

exemplodois.unshift("Marta", "Marcos");
console.log("");
console.log(exemplodois);


/* Adicionado marta na posição 2 (lembrete: inicia a contagem em 0) */
exemplodois = new Array ("João","José","Maria");

exemplodois.splice(2,1,"Marta");
console.log("");
console.log(exemplodois);