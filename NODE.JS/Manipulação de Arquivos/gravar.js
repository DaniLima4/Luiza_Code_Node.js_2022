//Escrita de arquivo

const fs = require('fs')

const processarAposEscrita = (err) => {
    console.log('Arquivo foi escrito', err)
}

fs.writeFile(
    //Arquivo
    'Saida.txt',
    //Dados para o arquivo 
    'Sou um texto\n',
    //funcção callback 
    processarAposEscrita
)