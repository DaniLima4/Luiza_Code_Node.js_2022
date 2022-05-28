// No script abaixo, com base nos valores informados na variável entrada, comente e explique o comportamento da função validar().

const fazOutraCoisa = (registro) => Object.assign(
    {fez: true}, registro
   )
   const funcaoFazAlgo = (registro) => {
    if (!registro) {
    throw new Error('Registro não foi informado')
    }
    return Promise.resolve(registro)
    .then(fazOutraCoisa)
   }
   const validar = async (registros) => {
    for (let registro of registros ) {
    console.info('Validando o registro: ', registro)
    try {
    const saida = await funcaoFazAlgo(registro)
    console.log(' OK: ', saida)
    } catch (erro) {
    console.error(' ERRO: ' + erro)
    }
    }
   }
   const entrada = [{info: 'luizacode'}, 1, null, 0, []] 
   validar(entrada)
    .then(() => console.log('Fim'))
    .catch(erro => console.error('Fim errado', erro))
   