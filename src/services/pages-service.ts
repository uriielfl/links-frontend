import { trackPromise } from 'react-promise-tracker';

import { api } from 'api';

import { IPage } from 'utils/interfaces/page.interface';

export const getPageByPath = async (path: string) => {
  return await api.get(`/page/${path}`);
};

export const getPageByPathAndPeriod = async (
  path?: string,
  startDate?: Date | string,
  endDate?: Date | string,
) => {
  return await api.get(`/page/${path}/${startDate}/${endDate}`);
};

export const getMyPages = async () => {
  return await api.get(`/page/my-pages`);
};

export const create = async (payload: IPage) => {
  return await trackPromise(api.post('/page', payload));
};
