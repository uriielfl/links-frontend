import * as yup from 'yup';

export const createLinkSchema = yup.object().shape({
  url: yup.string().url().required(),
});
