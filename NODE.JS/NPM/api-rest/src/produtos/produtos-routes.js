import express from 'express'

const router = express.Router()

import ProdutoController from './produtos-controller'
const produtoController = new ProdutoController()

router.get('/', (req, res, next) => {
    produtoController.listarProduto()
    .then(produtos => res.status(200).send(produtos))
    .catch(next)
})

//buscar um produto pelo identificador
router.get('/:_id', (req, res) => {
    produtoController.listarProdutoPorId(req.params._id)
    .then(produto => res.status(200).send(produto))
})

// cadastrar novo produto
router.post('/', (req, res, next) => {
    produtoController.cadastrarProduto(req.body)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

// atualizar produto
router.put('/:_id', (req, res, next) => {
    produtoController.atualizarProduto(req.params._id, req.body)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

// remover produto
router.delete('/:_id', (req, res, next) => {
    produtoController.removerProduto(req.params._id)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

export default router
