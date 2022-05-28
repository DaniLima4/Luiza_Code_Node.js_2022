const fs = require('fs')
const nomeArquivo = 'configuracao.json'
function processarArquivo(erro, dado) {
    if (erro) {
        console.error('Deu ruim', erro)
        return
    }
    console.log('Sucesso! Eis o arquivo....')
    const configuracao = JSON.parse(dado)
    console.log(configuracao)
}
fs.readFile(nomeArquivo, processarArquivo)
