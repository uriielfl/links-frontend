import { Button, Typography } from '@material-tailwind/react';
import { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Loading } from 'components/Loading';

interface IWrapper {
  children: ReactNode;
  pageExists?: boolean;
  isLoaded?: boolean;
}
export const Wrapper = ({ children, pageExists, isLoaded }: IWrapper) => {
  const navigate = useNavigate();
  const { path } = useParams<{ path: string }>();
  const goToCreatePage = () => navigate('/create-page', { state: { path } });

  if (!isLoaded) {
    return (
      <div className="w-full h-96 items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (pageExists) {
    return <>{children}</>;
  }

  return (
    <div className="p-8 space-y-8">
      <Typography color="black" variant="h1">
        Parece que {path} não existe
      </Typography>
      <Typography color="black" variant="h6">
        O que acha de a criarmos?
      </Typography>
      <Button onClick={goToCreatePage}>Criar página</Button>
    </div>
  );
};
