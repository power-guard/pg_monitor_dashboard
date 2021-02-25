import { Head } from 'components/Head';
import { DashboardTable } from 'components/pages/dashboard/DashbardTable';
import { DashboardTopArea } from 'components/pages/dashboard/DashboardTopArea';
import { useFetchPollData } from 'hooks/useFetchPollData';
import { BaseLayout } from 'layouts/BaseLayout';
import React from 'react';

function HomePage() {
  const { pollData, isLoading, error } = useFetchPollData();

  console.log(pollData);

  if (error) {
    return <BaseLayout>Display error message</BaseLayout>;
  }

  if (isLoading) {
    return <BaseLayout>Display loading spinner</BaseLayout>;
  }

  return (
    <BaseLayout>
      <Head />
      <div>
        <DashboardTopArea done={pollData.done} proc_start={pollData.proc_start} proc_end={pollData.proc_end} />
        <DashboardTable plants={pollData.plants} />
      </div>
    </BaseLayout>
  );
}

export default HomePage;
