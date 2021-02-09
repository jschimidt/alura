const conexao = require('../infraestrutura/conexao')
const AtendimentosValidator = require('../validators/atendimentos')

class Atendimentos {
    add(params,res) {
        AtendimentosValidator.validate(params)
        .then((p)=>{
            const sql = `INSERT INTO Atendimentos SET ?`
            conexao.query(sql, p, (error, result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json(result)
                }
            })
        })
        .catch((err)=>{
            res.status(400).json(err)
        })                           
    }

    get(id,res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ?`
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result[0])
            }
        })
    }

    all(req,res) {
        const sql = `SELECT * FROM Atendimentos;`
        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    patch(id,params,res) {
        AtendimentosValidator.validate(params)
            .then((p) => {
                const sql = `UPDATE Atendimentos SET ? WHERE id = ?`
                conexao.query(sql, [p, id], (error, result) => {
                    if (error) {
                        res.status(400).json(error)
                    } else {
                        res.status(200).json(result)
                    }
                })
            })
            .catch((err) => {
                res.status(400).json(err)
            }) 
    }
}

module.exports = new Atendimentos