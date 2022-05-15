const fs = require('fs')
const nomeArquivo = 'configuracao2.json'
const registro = { 'luiza': 'code' }
const texto = JSON.stringify(registro)
fs.writeFile(nomeArquivo, texto, informarApoSalvar)

function informarApoSalvar(erro) {
    console.log('Gravou?', erro)
}
