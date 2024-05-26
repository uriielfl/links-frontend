export const formatDate = (value?: Date) => {
  return value?.toISOString().slice(0, 19).replace('T', ' ');
};
