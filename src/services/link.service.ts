import { api } from 'api';

import { ILink } from 'utils/interfaces/link.interface';

export const create = async (payload: ILink) => {
  return await api.post('/links', payload);
};

export const remove = async (id: number) => {
  return await api.delete(`/links/${id}`);
};

export const getLogs = async (id: string) => {
  return await api.get(`/links/${id}`);
};

export const linkService = {
  create: create,
  remove: remove,
  getLogs: getLogs,
};
