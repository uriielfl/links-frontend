import { Card, Typography } from '@material-tailwind/react';

interface IMostAccessedLink {
  url: string;
  totalClicks: number;
}
export const MostAccessedLink = ({ url, totalClicks }: IMostAccessedLink) => {
  return (
    <Card className="w-60 h-max p-8 gap-8 items-center justify-center shadow-xl">
      <div>
        <Typography className="text-lg" color="black" variant="h5">
          Seu link mais popular nos últimos 7 dias:
        </Typography>
        <Typography
          className="font-bold text-xl"
          color="blue"
          variant="paragraph"
        >
          {url}
        </Typography>
      </div>
      <div>
        <Typography color="black" variant="h5">
          Cliques totais
        </Typography>
        <Typography
          className="font-bold text-lg"
          color="blue"
          variant="paragraph"
        >
          {totalClicks}
        </Typography>
      </div>
    </Card>
  );
};
