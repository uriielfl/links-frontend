import Cookie from 'js-cookie';

const encodeBase64 = (value: string) => {
  return btoa(value);
};

const decodeBase64 = (encodedValue: string) => {
  return atob(encodedValue);
};

export const getCookie = (key: string) => {
  const cookieValue = Cookie.get(encodeBase64(key));

  if (cookieValue) {
    return decodeBase64(cookieValue);
  }
  return undefined;
};

export const setCookie = (
  key: string,
  value: any,
  options?: { expires?: number },
) => {
  return Cookie.set(encodeBase64(key), encodeBase64(value), {
    expires: options?.expires,
  });
};

export const removeCookie = (key: string) => {
  Cookie.remove(encodeBase64(key));
};
