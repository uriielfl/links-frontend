import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate('/');

  return (
    <div className="space-y-4 p-8">
      <Typography color="gray" variant="h1">
        404
      </Typography>
      <Typography color="gray" variant="h4">
        Página não encontrada
      </Typography>
      <Typography color="gray">
        Parece que não foi possível encontrar a página que você procurava. O que
        acha de tentarmos do início?
      </Typography>
      <Button onClick={goToHome}>Me leve para a página inicial</Button>
    </div>
  );
};
