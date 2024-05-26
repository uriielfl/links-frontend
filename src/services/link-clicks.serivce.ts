import { api } from 'api';

export const triggerClickEvent = async (link: number) => {
  return await api.post('/link-click', {
    link,
  });
};
