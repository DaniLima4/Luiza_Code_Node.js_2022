let fs = null

try{
    fs = require ('fsv2')
} catch (err) {
    if (err.code !==  'MODULE_NOT_FOUND'){
        throw err // ??
    }
    console.error('Posso tratar', err.code)
    fs = require ('fs')
}

console.log ("Tenho fs", !!fs)