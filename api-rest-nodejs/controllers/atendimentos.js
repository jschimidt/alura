const Atendimentos = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos',(req,res)=> {
        Atendimentos.all(req,res)
    })

    app.get('/atendimentos/:id',(req,res)=> {
        const id = parseInt(req.params.id)
        Atendimentos.get(id,res)
    })

    app.post('/atendimentos',(req,res)=>{
        Atendimentos.add(req.body,res)
    })

    app.patch('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        Atendimentos.patch(id,req.body,res)
    })
}