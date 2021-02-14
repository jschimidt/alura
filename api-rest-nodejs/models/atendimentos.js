const atendimentosValidator = require('../validators/atendimentos')
const dao = require('../dao/atendimentos')

class Atendimentos {
    add(params) {
        return atendimentosValidator.validate(params)
                .then((validParams)=>{
                    return dao.add(validParams)
                            .then(results => {
                                const id = results.insertId
                                return {...params,id}
                            })
        })
        .catch((err)=>{
            return new Promise((resolve,reject) => reject(err))
        })                           
    }

    all() {
        return dao.all()
    }

    get(id) {
        return dao.get(id)
    }

    patch(id,params) {

        return atendimentosValidator.validate(params)
            .then((validParams) => {
                return dao.patch(id, validParams)
                    .then(results => results)
            })
            .catch((err) => {
                return new Promise((resolve, reject) => reject(err))
            })  
    }
}

module.exports = new Atendimentos