import * as yup from 'yup';

export const createPageSchema = yup.object().shape({
  title: yup
    .string()
    .required('O "Título" da sua página é obrigatório')
    .min(3, 'O título da página deve ter no mínimo 3 caracteres'),
  path: yup
    .string()
    .required('O "Path" da página é obrigatório')
    .min(3, 'O path da página deve ter no mínimo 3 caracteres'),
});
