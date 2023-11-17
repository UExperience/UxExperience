import { Request, Response } from 'express';
import * as yup from 'yup';


// criar uma inface onde teremos o tipo de cada variavel
interface IUsuario  {
    nome: string;
    sobrenome: string;
    email: string;
    PerfilDeAcesso: string;
    Tipo: string;
    Senha: string;
    InstituicaoParceira: string;
    Telefone: string;
    AreaAcademica: string;
}

//validar o json recebido com o yup
const bodyValidation: yup.ObjectSchema<IUsuario> = yup.object().shape({
    nome: yup.string().required().min(3),
    sobrenome: yup.string().required(),
    email: yup.string().required().email(),
    PerfilDeAcesso: yup
        .string()
        .oneOf(['Reitor', 'Gestor de RI', 'Docente', 'Discentes', 'Empreendedores', 'Parceiro'])
        .required(),
    Tipo: yup.string().oneOf(['PJ', 'PF', 'White Label']).required(),
    Senha: yup.string()
        .required()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/, 'A senha deve conter caracteres especiais, letras maiúsculas e números'),
    InstituicaoParceira: yup.string().required(),
    Telefone: yup.string()
        .required()
        .matches(/^\(\d{2}\) \d-\d{4}-\d{4}$/, 'O telefone deve estar no formato (xx) x-xxxx-xxxx'),
    AreaAcademica: yup.string().required(),
});


export const  create = async (req: Request<{}, {}, IUsuario>, res: Response) => {


    try {
        await bodyValidation.validate(req.body);
    } catch (error){
        const yupError = error as yup.ValidationError;
        return res.json({
            erros: {
                default: yupError.message,
            }
        })
    }

    const usuario: IUsuario = req.body;

    console.log(usuario);
    console.log(req.body.nome);

    return res.send('Create!');
};