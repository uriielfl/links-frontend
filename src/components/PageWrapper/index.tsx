import { Card } from '@material-tailwind/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'components/Nav';

import './styles.scss';

interface IPageWrapper {
  children?: ReactNode;
}
export const PageWrapper = ({ children }: IPageWrapper) => {
  return (
    <div className="wrapper-container">
      <Nav.Wrapper>
        <Link to="/">
          <img
            width={80}
            src="/logo.png"
            alt="links"
          />
        </Link>
        <Nav.AuthActions />
      </Nav.Wrapper>
      <div className="w-full p-8">
        <Card className="md:items-center md:p-8 w-full">{children}</Card>
      </div>
    </div>
  );
};
