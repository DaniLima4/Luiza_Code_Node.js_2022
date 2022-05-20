import express from 'express'

import bodyParser from 'body-parser'

import routes from './src/routes'

// import urlencoded from 'body-parser/lib/types/urlencoded'

const app = express()

import swaggerJsdocs from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Luiza Code',
            version: '1.0.0'
        }
    },
    apis: ['./src/**/*-routes.js']

}

const openapiSpecification = swaggerJsdocs(options)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

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