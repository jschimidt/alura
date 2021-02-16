const query = require('../infraestrutura/database/instructionsProcessor')

class Pets {
    add(atendimento) {
        const sql = 'INSERT INTO Pets SET ?'
        return query(sql, atendimento)
    }

    all() {
        const sql = 'SELECT * FROM Pets'
        return query(sql)
    }

    get(id) {
        const sql = `SELECT * FROM Pets WHERE id = ?`
        return query(sql, id)
    }

    patch(id, params) {
        const sql = `UPDATE Pets SET ? WHERE id = ?`
        return query(sql, [params, id])
    }
}

module.exports = new Pets()