const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/connection')
const tabelas = require('./infraestrutura/database/structureManager')

conexao.connect(erro=>{
    if (erro) {
        console.log('database',erro)
    } else {
        console.log('database connected!');

        tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})