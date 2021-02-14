const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const docMain = require('./swagger.json')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    consign()
        .include('controllers')
        .include('doc')
        .into(app)

    docMain.paths = {
        ...app.doc.atendimentos,
        ...app.doc.pets
    }

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docMain))

    return app
}