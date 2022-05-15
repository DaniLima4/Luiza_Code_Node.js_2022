import express from 'express'

import bodyParser from 'body-parser'

import routes from './src/routes'

// import urlencoded from 'body-parser/lib/types/urlencoded'

const app = express()

// const json = bodyParser.json()

app.use(bodyParser.json())

// const urlencoded = bodyParser.urlencoded({extended:false})


// const myLogger = (req, res, next) => {
//     console.log('Executando o log.')
//     next()
// }

app.use('/', routes)

app.listen(3000, () => {
    console.log('Executando na porta 3000')

})