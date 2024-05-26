import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { linkService } from 'services/link.service';

import { IClickLog } from 'utils/interfaces/click-log.interface';

import { Table } from 'components/Table';

export const LinkLogs = () => {
  const [logs, setLogs] = useState({ loaded: false } as IClickLog);
  const LOGS_TABLE_HEADER = ['#', 'Cliques', 'Data'];
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      linkService
        .getLogs(id)
        .then((response) => {
          setLogs({ ...response.data.link, loaded: true });
        })
        .catch(() => {
          setLogs({ loaded: true } as IClickLog);
        });
    }
  }, []);

  return (
    <>
      <Typography color="gray" variant="h1">
        Logs de cliques
      </Typography>
      <Typography color="gray" variant="h5">
        {logs?.url}
      </Typography>
      <Table
        dataKeys={['id', 'clickCount', 'clickedAt']}
        data={logs?.linkClicks}
        isLoaded={logs.loaded}
        headers={LOGS_TABLE_HEADER}
      ></Table>
    </>
  );
};
