import { useUser } from 'context/user';

import { ReactNode, createContext } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

import { Loading } from 'components/Loading';

export const LoadingContext = createContext({});

interface ILoadingProvider {
  children: ReactNode;
}
export const LoadingProvider = ({ children }: ILoadingProvider) => {
  const { user } = useUser();
  const { promiseInProgress: doingRequest } = usePromiseTracker();
  const IsLoading = !user.loaded && doingRequest;

  return (
    <LoadingContext.Provider value={{}}>
      {IsLoading ? <Loading /> : children}
    </LoadingContext.Provider>
  );
};
