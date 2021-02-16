const petsValidator = require('../validators/pets')
const dao = require('../dao/pets')
const upload = require('../infraestrutura/files/upload')

class Pets {
    async add(params) {
        let novoCaminho = await upload(params.imagem, params.nome) 
        
        return petsValidator.validate(params)
        .then((validParams) => {
            validParams.imagem = novoCaminho
            return dao.add(validParams)
        })
        .then(results => {
            const id = results.insertId
            return { ...params, id }
        })
        .catch((err) => {
            return new Promise((resolve, reject) => reject(err))
        })

    }

    all() {
        return dao.all()
    }

    get(id) {
        return dao.get(id)
    }

    async patch(id, params) {

        let novoCaminho = await upload(params.imagem, params.nome) 

        return petsValidator.validate(params)
            .then((validParams) => {
                validParams.imagem = novoCaminho
                return dao.patch(id, validParams)
            })
            .then(results => results)
            .catch((err) => {
                return new Promise((resolve, reject) => reject(err))
            })
    }
}

module.exports = new Pets