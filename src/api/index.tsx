import axios from 'axios';

import { CookiesKeys } from 'utils/constants/cookies-keys';
import { getCookie } from 'utils/cookies';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const authToken = getCookie(CookiesKeys.AUTH_TOKEN);
  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }
  return config;
});
