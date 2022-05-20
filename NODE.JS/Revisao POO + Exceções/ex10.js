let fs = null

try{
    fs = require ('fs01')
} catch (err) { //Se deu erro 
    if (err.code !==  'MODULE_NOT_FOUND'){
        throw err // ??
    }
    console.error('Posso tratar', err.code)
    fs = require ('fs')
} finally { //Execua o try - deu certo executa o finally - nunca fazer return no finally
    console.log('Mesmo que dê certo ou dê errad eu vou executar')
}

console.log ("Tenho fs", !!fs)