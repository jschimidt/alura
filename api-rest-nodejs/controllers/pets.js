const Pets = require('../models/pets')

module.exports = app => {
    app.get('/pets', (req, res) => {
        Pets.all()
            .then(results => res.json(results))
            .catch(erros => res.status(400).json(erros))
    })

    app.get('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pets.get(id)
            .then(results => res.json(results[0]))
            .catch(erros => res.status(400).json(erros))
    })

    app.post('/pets', (req, res) => {
        Pets.add(req.body)
            .then(petCadastrado =>
                res.status(201).json(petCadastrado)
            )
            .catch(erros => res.status(400).json(erros))
    })

    app.patch('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pets.patch(id, req.body)
            .then(petAlterado =>
                res.status(202).json(petAlterado)
            )
            .catch(erros => res.status(400).json(erros))
    })
}