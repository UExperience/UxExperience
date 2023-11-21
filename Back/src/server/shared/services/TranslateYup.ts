import { setLocale } from "yup";


setLocale({
    mixed:{
    required: 'Este campo é obrigatório',
    notType: 'Formato digitado é inválido',
    defined: 'Este campo deve ter um valor definido',
    oneOf: 'Deve ser um dos seguintes valores ${values}',
    notOneOf: 'Não pode ser um dos seguintes valores ${values}',
    },
    string:{
        lowercase: 'Deve estar em maiúsculo',
        uppercase: 'Deve estar em minúsculo',
        url: 'Deve ter um formato de URL válido',
        max: 'Deve ter no máximo ${max} caracteres',
        min: 'Deve ter no mínimo ${min} caracteres',
        email: 'Formato de email digitado não é válido',
        length: 'Deve ter exatamente ${length} caracteres',
        uuid: 'Valor digitado não confere a um UUID válido',
        trim: 'Não deve conter espas no início ou no fim',
        matches: 'O valor deve corresponder ao padrão: ${regex}',
    },
    number:{
        min: 'Deve ter no mínimo ${min}',
        max: 'Deve ter no máximo ${max}',
        integer: 'Deve ser um número inteiro',
        lessThan: 'Deve ser um número menor que ${less}',
        moreThan: 'Deve ser um número maior que ${more}',
        positive: 'Deve ser um número positivo',
        negative: 'Deve ser um número negativo',
    },
    date: {
        min: 'Deve ser maior que a data ${min}',
        max: 'Deve ser maior que a data ${max}',
    },
    array: {
        min: 'Deve ter no minimo ${min} itens',
        max: 'Deve ter no máximo ${max} itens',
        length: 'Deve conter exatamente ${length} itens',
    },
    object: {
        noUnknown: 'Deve ser algo definido'
    }
})
