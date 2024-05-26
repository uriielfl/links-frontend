import { Typography } from '@material-tailwind/react';

interface IHeader {
  title: string;
}
export const Header = ({ title }: IHeader) => {
  return (
    <>
      {title && (
        <Typography color="black" variant="h1">
          {title}
        </Typography>
      )}
    </>
  );
};
