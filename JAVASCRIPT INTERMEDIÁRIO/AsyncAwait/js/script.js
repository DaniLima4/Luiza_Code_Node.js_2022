

function cronometro(segundos) {

  return new Promise(resolve => {
      setTimeout( () => {
          console.log(`Os ${segundos} segundos finalizaram.`);
          resolve(segundos);
      }, segundos * 1000)
  });
}

const executarCronometro = async () => {

  cronometro(2);
  console.log(`Não esperei os 2 segundos para aparecer.`);

  let response = cronometro(3);
  console.log(`Esperei os ${response} segundos para aparecer.`);
}

executarCronometro(3);

 
 