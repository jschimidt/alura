const Atendimentos = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos',(req,res)=> {
        Atendimentos.all()
            .then(results => res.json(results))
            .catch(erros => res.status(400).json(erros))
    })

    app.get('/atendimentos/:id',(req,res)=> {
        const id = parseInt(req.params.id)
        Atendimentos.get(id)
            .then(results => res.json(results[0]))
            .catch(erros => res.status(400).json(erros))
    })

    app.post('/atendimentos',(req,res)=>{
        Atendimentos.add(req.body)
            .then(atendimentoCadastrado =>
                res.status(201).json(atendimentoCadastrado)
            )
            .catch(erros => res.status(400).json(erros))
    })

    app.patch('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        Atendimentos.patch(id,req.body)
            .then(atendimentoAlterado =>
                res.status(202).json(atendimentoAlterado)
            )
            .catch(erros => res.status(400).json(erros))
    })
}