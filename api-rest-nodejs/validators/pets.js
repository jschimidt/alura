const yup = require('yup')

yup.setLocale({
    string: {
        required: 'O campo deve ser preenchido',
        min: 'Deve ter mais que ${min} caracteres',
        max: 'Deve ter menos que ${max} caracteres'
    }
})

const schema = yup.object().shape({
    nome: yup.string().required().min(4).max(50),
    imagem: yup.string().required().min(7)
})

module.exports = schema