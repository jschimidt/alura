class Tables {
    init(connection) {
        const schema = 'agenda-petshop'
        const sql = 'CREATE SCHEMA IF NOT EXISTS `' + schema + '`'
        connection.query(sql,(erro) => {
            connection.changeUser({database:schema})
            this.conexao = connection
            this.criarAtendimentos()
            this.criarPets()
        })
    }

    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS 
                        Atendimentos (
                            id int NOT NULL AUTO_INCREMENT
                            , cliente varchar(50) NOT NULL
                            , pet varchar(20)
                            , servico varchar(20) NOT NULL
                            , status varchar(20) NOT NULL
                            , observacoes text
                            , dataPedido datetime NOT NULL
                            , dataCriacao datetime NOT NULL
                            , PRIMARY KEY(id)
                        )
                    `
        this.conexao.query(sql,erro=>{
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso');
            }
        })
    }

    criarPets() {
        const sql = `CREATE TABLE IF NOT EXISTS 
                        Pets (
                            id int NOT NULL AUTO_INCREMENT, 
                            nome varchar(50), 
                            imagem varchar(200), 
                            PRIMARY KEY (id)
                        )
                    `
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets criada com sucesso');
            }
        })        
    }
}

module.exports = new Tables()