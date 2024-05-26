import { useUser } from 'context/user';

import { Navigate, Outlet } from 'react-router-dom';

import { CookiesKeys } from 'utils/constants/cookies-keys';
import { getCookie } from 'utils/cookies';

import { Loading } from 'components/Loading';
import { PageWrapper } from 'components/PageWrapper';

export interface IRouterGuard {
  type?: 'public' | 'strictly-public' | 'private';
}

export const RouterGuard = ({ type = 'public' }: IRouterGuard) => {
  const { user } = useUser();
  const userIsAuthenticated = !!user.id && !!getCookie(CookiesKeys.AUTH_TOKEN);

  if (!user.loaded) return <Loading />;
  const data = {
    user: user,
    userIsAuthenticated: userIsAuthenticated,
    type: type,
    pathname: window.location.pathname,
  };
  console.log(data);
  switch (true) {
    case type === 'public':
      return (
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      );
    case type === 'strictly-public' && userIsAuthenticated:
      if (user.comingFromHome) return <Navigate to="/create-page" />;
      return <Navigate to="/my-pages" />;
    case type === 'private' && !userIsAuthenticated:
      return <Navigate to="/signin" />;
    default:
      return (
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      );
  }
};
