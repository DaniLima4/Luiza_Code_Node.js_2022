import express from 'express'

import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res, next) => res.send('Ola luiza code'))

app.get('/teste', (req, res, next) => res.send('Ola teste'))

app.listen(3000, () => {
    console.log('Executando na porta 3000')

})