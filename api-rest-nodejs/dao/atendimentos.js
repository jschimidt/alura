const query = require('../infraestrutura/database/instructionsProcessor')

class Atendimentos {
    add(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    all() {
        const sql = 'SELECT * FROM Atendimentos'
        return query(sql)
    }

    get(id) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ?`
        return query(sql,id)
    }

    patch(id,params) {
        const sql = `UPDATE Atendimentos SET ? WHERE id = ?`
        return query(sql,[params,id])
    }
}

module.exports = new Atendimentos()