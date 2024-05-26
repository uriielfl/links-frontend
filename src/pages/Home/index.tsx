import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="md:p-24 p-12 items-center flex-col flex">
        <img className="mb-8" width={120} src="./logo.png" alt="links" />
        <Typography variant="h1">
          Seus links andam espalhados por aí?
        </Typography>
        <Typography variant="h3">
          Por que não tentar agrupá-los em um só lugar?
        </Typography>
        <Typography variant="paragraph">
          Divulgue APENAS 1 ÚNICO LINK e direcione os seus seguidores PARA ONDE
          VOCÊ QUISER.
        </Typography>
        <Button
          className="mt-4"
          onClick={() => navigate('/signin', { state: { fromHome: true } })}
        >
          Quero criar minha página
        </Button>
      </div>
    </div>
  );
};
