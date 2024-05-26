import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPageByPath } from 'services/pages-service';

import { IPage } from 'utils/interfaces/page.interface';

import { Page as PageComponent } from 'components/Page';

export const Page = () => {
  const [page, setPage] = useState({ loaded: false } as IPage);
  const { path } = useParams<{ path: string }>();
  const PAGE_EXITS = !!(page.title && page.links?.length);

  useEffect(() => {
    if (path) {
      getPageByPath(path)
        .then((response) => {
          setPage({ ...response.data.page, loaded: true });
        })
        .catch(() => {
          setPage({ loaded: true } as IPage);
        });
    }
  }, []);

  return (
    <>
      <PageComponent.Wrapper isLoaded={page.loaded} pageExists={PAGE_EXITS}>
        <PageComponent.Header title={page.title} />
        <PageComponent.Content links={page.links} />
      </PageComponent.Wrapper>
    </>
  );
};
