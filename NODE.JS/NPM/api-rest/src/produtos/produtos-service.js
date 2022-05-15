import mongoose from 'mongoose'

import config from '../config'

mongoose.connect(config.connectionString)

import Produto from './produto-model'

class ProdutoService {
    cadastrarProduto(produto) {
        console.log('inserindo novo produto no mongodb....')
        const novoProduto = new Produto(produto)
        return novoProduto.save()
}
}


export default ProdutoService
