import 'chart.js/auto';

import { Card, Typography } from '@material-tailwind/react';
import { Doughnut } from 'react-chartjs-2';

import { getDateDifferenceInDay } from 'utils/helpers/date-difference';
import { ILink } from 'utils/interfaces/link.interface';

interface ITopAccessedChart {
  links: ILink[];
  period: { startDate: string; endDate: string };
}
export const TopAccessedChart = ({ links, period }: ITopAccessedChart) => {
  const data = {
    labels: links?.map((link) => link.url),
    datasets: [
      {
        label: 'Cliques',
        data: links?.map((link) => link.totalClicks),
        backgroundColor: [
          'rgb(5, 0, 92)',
          'rgb(125, 0, 97)',
          'rgb(243, 40, 80)',
          'rgb(198, 0, 80)',
          'rgb(50, 1, 80)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const daysDifferece = getDateDifferenceInDay(
    new Date(period.startDate),
    new Date(period.endDate),
  );

  const label = () => {
    switch (true) {
      case daysDifferece === 0:
        return 'Top 5 mais clicados hoje';
      case daysDifferece === 7:
        return 'Top 5 mais clicados em uma semana';
      case daysDifferece > 7 && daysDifferece < 30:
        return `Top 5 mais clicados em ${daysDifferece} dias`;
      case daysDifferece === 30:
        return 'Top 5 mais clicados em um mês';
      case daysDifferece === 365:
        return 'Top 5 mais clicados em um ano';
      default:
        return `Top 5 mais clicados em ${daysDifferece} dias`;
    }
  };

  return (
    <Card className=" w-60 h-max p-8 items-center justify-center shadow-xl">
      <Typography color="black" variant="h5">
        {label()}
      </Typography>
      {links && <Doughnut data={data} />}
    </Card>
  );
};
