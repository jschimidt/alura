const conexao = require('./connection')

module.exports = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}