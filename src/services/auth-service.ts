import { trackPromise } from 'react-promise-tracker';

import { api } from 'api';

import { ISignIn } from 'utils/interfaces/signin.interface';
import { ISignUp } from 'utils/interfaces/signup.interface';

export const signup = async (payload: ISignUp) => {
  delete payload.repeatPassword;
  const response = await trackPromise(api.post('/users', payload));
  try {
    return response.data;
  } catch (error) {
    return error;
  }
};

export const signin = async (payload: ISignIn) => {
  return await trackPromise(api.post('/auth/login', payload));
};

export const me = async () => {
  const response = await trackPromise(api.get('/auth/me'));

  try {
    return response.data;
  } catch (error) {
    return error;
  }
};
