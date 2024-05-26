import { createContext, useContext, useEffect, useState } from 'react';

import { me } from 'services/auth-service';

import { CookiesKeys } from 'utils/constants/cookies-keys';
import { getCookie, removeCookie } from 'utils/cookies';
import { IUser } from 'utils/interfaces/user.interface';

interface IUserContext {
  user?: any;
  syncUser: (comingFromHome?: boolean) => void;
  logout: () => void;
}
const UserContext = createContext({} as IUserContext);

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<any>({ loaded: false } as IUser);

  const logout = () => {
    removeCookie(CookiesKeys.AUTH_TOKEN);
    setUser({ loaded: true } as any);
  };

  const syncUser = (comingFromHome?: boolean) => {
    const token = getCookie(CookiesKeys.AUTH_TOKEN);
    if (token) {
      me()
        .then((response) => {
          setUser({
            ...response.user,
            comingFromHome: comingFromHome,
            loaded: true,
          });
        })
        .catch(() => {
          logout();
        });
      return;
    }
    setUser({ loaded: true } as any);
  };

  useEffect(() => {
    syncUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, syncUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
