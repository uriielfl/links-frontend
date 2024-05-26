import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMyPages } from 'services/pages-service';

import { IPage } from 'utils/interfaces/page.interface';

import { Table } from 'components/Table';

export const List = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState({ loaded: false, data: [] } as {
    loaded: boolean;
    data: IPage[];
  });

  useEffect(() => {
    getMyPages()
      .then((response) => {
        setPages({ data: [...response.data], loaded: true });
      })
      .catch(() => {
        setPages({ data: [], loaded: true });
      });
  }, []);

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <Table
    data={pages.data}
    dataKeys={['id', 'title', 'path', 'page.links']}
    isLoaded={pages.loaded}
    headers={['#', 'Título', 'Path', '', '']}
    actionButtons={[
      (page) => (
        <Button
          onClick={() => handleNavigate(`my-pages/${page.path}/analytics`)}
        >
          Analytics
        </Button>
      ),
      (page) => (
        <Button onClick={() => handleNavigate(page.path)}>Acessar</Button>
      ),
    ]}
    ></Table>
  );
};
