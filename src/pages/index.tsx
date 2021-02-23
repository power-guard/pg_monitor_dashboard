import { AxiosError } from 'axios';
import { Head } from 'components/Head';
import { DashboardTable } from 'components/pages/dashboard/DashbardTable';
import { DashboardTopArea } from 'components/pages/dashboard/DashboardTopArea';
import { BaseLayout } from 'layouts/BaseLayout';
import React, { useState } from 'react';
import { poll } from 'services/pollService';
import { PollResponse } from 'types/api';

function HomePage() {
  const [data, setData] = useState<PollResponse>({
    done: false,
    proc_start: null,
    proc_end: null,
    plants: [],
  });

  React.useEffect(() => {
    poll
      .fetch()
      .then((data: PollResponse) => {
        console.log(data);
        setData(data);
      })
      .catch((error: AxiosError) => {
        //TODO: proper error handling.
        console.log(error);
      });
  }, []);

  return (
    <BaseLayout>
      <Head />
      <DashboardTopArea done={data.done} proc_start={data.proc_start} proc_end={data.proc_end} />
      <DashboardTable plants={data.plants} />
    </BaseLayout>
  );
}

export default HomePage;
