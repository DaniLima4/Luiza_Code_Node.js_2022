
function fachadaMongoSlavar(configuracao) {
    const configuracaoMongo = configuracao
    return function(colecao, registro) {
        console.log('Salvar Mongo(', configuracaoMongo, '): ', colecao, registro)
    }   
}

const salvarMongo = fachadaMongoSlavar({ url: 'mongodb', conectarPreguicoso: true})
salvarMongo('pessoa', {'nome': 'aline vianna', 'idade': 18})