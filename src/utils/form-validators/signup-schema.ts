import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'O usuário deve ter, no mínimo, 6 caractéres')
    .required('Usuário é obrigatório'),
  firstname: yup.string().required('Nome é obrigatório'),
  lastname: yup.string().required('Sobrenome é obrigatório'),
  email: yup
    .string()
    .email('Precisamos de um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Senhas não coincidem'),
});
