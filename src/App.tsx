import { LoadingProvider } from 'context/loading';
import { ModalProvider } from 'context/modal';
import { PopupProvider } from 'context/popup';
import { UserProvider } from 'context/user';

import { RouterProvider } from 'react-router-dom';

import { router } from './routers';

import './App.scss';

function App() {
  return (
    <>
      <UserProvider>
        <LoadingProvider>
          <ModalProvider>
            <PopupProvider>
              <RouterProvider router={router}></RouterProvider>
            </PopupProvider>
          </ModalProvider>
        </LoadingProvider>
      </UserProvider>
    </>
  );
}

export default App;
