import * as yup from 'yup';

export const SigninSchema = yup.object().shape({
  emailOrUsername: yup.string().required('Email ou usuário é obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
});
