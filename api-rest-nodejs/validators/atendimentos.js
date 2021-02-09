const yup = require('yup')
const moment = require('../config/customMoment')

yup.setLocale({
    string: {
        required: 'O campo deve ser preenchido',
        min: 'Deve ter mais que ${min} caracteres',
        max: 'Deve ter menos que ${max} caracteres'
    }
})

yup.addMethod(yup.mixed, 'formatDate', function (formats, parseStrict) {
    return this.transform( function (value, originalValue) {
        if (!this.isType(value)) return value
        let dateValue = moment(originalValue, formats, parseStrict)
        return dateValue.isValid() ? dateValue.format(parseStrict) : value
    })
})

let schema = yup.object().shape({
    cliente: yup.string().required().min(6).max(15),
    pet: yup.string().required().min(4),
    servico: yup.string().required(),
    status: yup.string().required(),
    observacoes: yup.string().required(),
    dataPedido: yup.mixed().required()
        .test({
            name: 'validDate',
            exclusive: true,
            params: {},
            message: `Não é uma data válida`,
            test: (value,context) => {
                let dateValue = moment(context.options.originalValue, 'DD/MM/YYYY', 'YYYY-MM-DD hh:mm:ss')
                return dateValue.isValid()
            }
        })
        .test({
            name: 'inputFormat',
            exclusive: true,
            params: {},
            message: `Formato de entrada inválido. Use DD/MM/YYYY`,
            test: (value,context) => {
                return (/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/((19|20)\d{2})$/g).test(context.options.originalValue)
            }
        })
        .formatDate('DD/MM/YYYY', 'YYYY-MM-DD hh:mm:ss')
        ,    
    dataCriacao: yup.string().default(() => {
        return moment()
               .tz("America/Sao_Paulo")
               .format('YYYY-MM-DD HH:mm:ss')
    })
})

module.exports = schema