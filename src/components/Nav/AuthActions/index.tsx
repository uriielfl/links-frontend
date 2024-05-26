import { useUser } from 'context/user';

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LuUserPlus } from 'react-icons/lu';
import { MdOutlineNewspaper } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface IAuthActions {}

export const AuthActions = ({}: IAuthActions) => {
  const { user, logout } = useUser();
  const isAuthenticated = user?.loaded && user?.id;
  const navigate = useNavigate();
  const isLoading = !user?.loaded;
  if (isLoading) {
    return (
      <>
        <Button>Carregando...</Button>
      </>
    );
  }

  if (isAuthenticated) {
    return (
      <>
        <Menu>
          <MenuHandler>
            <Button>Ola, {user.firstname}</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              className="flex items-center gap-2"
              onClick={() => navigate('/create-page')}
            >
              <MdOutlineNewspaper />
              <Typography>Criar Página</Typography>
            </MenuItem>
            <MenuItem
              className="flex items-center gap-2"
              onClick={() => navigate('/my-pages')}
            >
              <IoNewspaperOutline />

              <Typography>Minhas Páginas</Typography>
            </MenuItem>

            <MenuItem className="flex items-center gap-2" onClick={logout}>
              <CiLogout />
              <Typography>Sair</Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  }
  return (
    <>
      <>
        <Menu>
          <MenuHandler>
            <Button>Entrar</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              className="flex items-center gap-2"
              onClick={() => navigate('/signin')}
            >
              <CiLogin />
              <Typography>Login</Typography>
            </MenuItem>
            <MenuItem
              className="flex items-center gap-2"
              onClick={() => navigate('/signup')}
            >
              <LuUserPlus />
              <Typography>Cadastro</Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    </>
  );
};
