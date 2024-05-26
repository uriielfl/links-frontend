import { useModal } from 'context/modal';

import { Button, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { linkService } from 'services/link.service';
import { getPageByPathAndPeriod } from 'services/pages-service';

import { LAST_WEEK, TODAY } from 'utils/constants/date';
import { formatDate } from 'utils/helpers/format-date';
import { ILink } from 'utils/interfaces/link.interface';
import { IPage } from 'utils/interfaces/page.interface';

import { CreateLinkForm } from 'components/CreateLinkForm';
import { Dashboard } from 'components/Dashboard';
import { Table } from 'components/Table';

export const Analytics = () => {
  const { triggerModal } = useModal();
  const [dashData, setDashData] = useState({ page: {}, dash: {} } as {
    dash: IPage;
    page: IPage;
    loaded: boolean;
  });
  const [period, setPeriod] = useState({
    startDate: LAST_WEEK,
    endDate: TODAY,
  });
  const navigate = useNavigate();
  const { path } = useParams();

  const MOST_ACCESSED_LINK = {
    url: dashData?.dash?.links?.[0]?.url ?? '',
    totalClicks: dashData?.dash?.links?.[0]?.totalClicks ?? 0,
  };

  useEffect(() => {
    if (path) {
      getPageByPathAndPeriod(path, period.startDate, period.endDate).then(
        (response) => {
          console.log(response);
          setDashData({ ...response.data, loaded: true });
        },
      );
    }
  }, [period]);

  const removeLink = (id?: number) => {
    if (id) {
      linkService.remove(id).then(() => {
        if (dashData.page.links) {
          setDashData((prev) => ({
            ...prev,
            page: {
              ...prev.page,
              links: prev.page.links?.filter((link) => link.id !== id),
            },
            loaded: true,
          }));
        }
      });
    }
  };

  const handleChangePeriod = (key: string, value?: Date) => {
    setPeriod((prev) => ({
      ...prev,
      [key]: formatDate(value),
    }));
  };

  const triggerConfirmDelete = (id?: number) => {
    triggerModal({
      open: true,
      title: 'Remover link',
      message: 'Tem certeza que deseja remover esse link?',
      confirmText: 'Sim',
      cancelText: 'Não',
      onConfirm: () => removeLink(id),
    });
  };

  const goToLogs = (id?: number) => {
    if (id) {
      navigate(`/click-logs/${id}`);
    }
  };

  const onSubmitLinkCreation: SubmitHandler<ILink> = (data) => {
    setDashData((prev) => ({
      ...prev,
      page: {
        ...prev.page,
        links: [...(prev.page.links || []), data],
      },
    }));
  };

  return (
    <div className="space-y-10 w-full">
      <Typography variant="h1" color="black">
        {dashData?.page?.title}
      </Typography>
      <Dashboard.Wrapper>
        <Dashboard.Filter
          handleChangePeriod={handleChangePeriod}
          period={period}
        />
        <Dashboard.TopAccessedChart
          period={period}
          links={dashData?.dash.links || []}
        />
        <Dashboard.MostAccessedLink {...MOST_ACCESSED_LINK} />
      </Dashboard.Wrapper>
      <Typography variant="h3" color="black">
        Links cadastrados
      </Typography>
      <Table
        isLoaded={dashData.loaded}
        data={dashData?.page?.links}
        dataKeys={['id', 'url', 'totalClicks']}
        headers={['#', 'Url', 'Cliques totais', '', '']}
        actionButtons={[(link) => (
          <Button onClick={() => triggerConfirmDelete(link.id)}>
          Remover
        </Button>
        ), (link) => (
          <Button onClick={() => goToLogs(link.id)}>Logs</Button>
        )]}
      >
      </Table>
      <CreateLinkForm
        page={dashData?.page}
        onLinkCreated={onSubmitLinkCreation}
      />
    </div>
  );
};
