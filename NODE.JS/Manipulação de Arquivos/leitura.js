// Leitura de Arquivos 

const fs = require('fs')

function processarArquivo(erro, dados) {
    if (erro) {
        console.error('Falha ao processar o arquivo', erro)
        return
    }
    console.log('Arquivo carregado!', dados)
//Transformando em registro do Javascript
registro = JSON.parse(dados)
    console.log('Em registro:', registro)
}


fs.readFile(
    //Arquivo
    'Saida.txt',
    //Dados para o arquivo 
    'Sou um texto\n',
    //funcção callback 
    processarArquivo
)