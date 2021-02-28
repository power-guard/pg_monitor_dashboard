import { Head } from 'components/Head';
import { DashboardTable } from 'components/pages/dashboard/DashbardTable';
import { DashboardTopArea } from 'components/pages/dashboard/DashboardTopArea';
import { useFetchPollData } from 'hooks/useFetchPollData';
import { BaseLayout } from 'layouts/BaseLayout';
import React from 'react';

function HomePage() {
  const { pollData, isLoading, error } = useFetchPollData();

  if (error) {
    return (
      <BaseLayout>
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col text-center text-brand-600">
            <img src="/error.svg" alt="Error icon" className="w-24 mb-6 m-auto" />
            <div className="text-lg font-semibold">An unexpected error occurred.</div>
            <div className="text-sm">Please contact the system administrator.</div>
          </div>
        </div>
      </BaseLayout>
    );
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
