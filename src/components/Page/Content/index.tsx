import { Typography } from '@material-tailwind/react';

import { ILink } from 'utils/interfaces/link.interface';

import { TriggerableLink } from 'components/TriggerableLink';

interface IContent {
  links?: ILink[];
}
export const Content = ({ links }: IContent) => {
  return (
    <>
      <Typography color="black" variant="h5">
        Acesse nossos links:
      </Typography>
      <ul>
        {links?.map((link) => (
          <li className=" text-black list-disc" key={link.id}>
            <TriggerableLink link={link} />
          </li>
        ))}
      </ul>
    </>
  );
};
