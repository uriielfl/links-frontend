export const TODAY = new Date().toISOString().slice(0, 19).replace('T', ' ');
export const LAST_WEEK = new Date(new Date().setDate(new Date().getDate() - 7))
  .toISOString()
  .slice(0, 19)
  .replace('T', ' ');
