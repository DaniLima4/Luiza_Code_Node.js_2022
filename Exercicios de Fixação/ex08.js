// Transforme o seguinte script de funções de callbacks para funções assíncronas (async/await e ou Promises)

const calcular = (x, y, funcaoCallback) => {
    let erro = null
    let resultado = null
    if (y == 0) {
    erro = 'Y não pode ser zero'
    } else { resultado = (x * 2) + y }
    funcaoCallback(erro, resultado)
   }
   const testarCalcular = () => {
    const apresentarResultadoTeste2 = (erro, resultado2) => {
    console.log('[TESTE2] Não deveria ter erro aqui: ', erro) 
    console.log('[TESTE2] Resultado do teste:', resultado2)
    }
    const calcularTeste2 = () => calcular(2, 1, apresentarResultadoTeste2)
    const apresentarErro1Testar2 = (erro1) => {
    console.log('[TESTE1] Deveria informar erro1: ', erro1)
    calcularTeste2()
    }
    calcular(2, 0, apresentarErro1Testar2)
   }
   testarCalcular()
   
