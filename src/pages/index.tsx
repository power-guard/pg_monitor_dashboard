import { Head } from 'components/Head';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { DashboardTable } from 'components/pages/dashboard/DashbardTable';
import { DashboardTopArea } from 'components/pages/dashboard/DashboardTopArea';
import { useFetchPollData } from 'hooks/useFetchPollData';
import { BaseLayout } from 'layouts/BaseLayout';
import React from 'react';
import { getStaticFilePath } from 'utils/environmentUtils';

function HomePage() {
  const { pollData, isLoading, error } = useFetchPollData();

  if (error) {
    return (
      <BaseLayout>
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col text-center text-brand-600">
            <img src={getStaticFilePath('/error.svg')} alt="Error icon" className="w-24 mb-6 m-auto" />
            <div className="text-lg font-semibold">An unexpected error occurred.</div>
            <div className="text-sm">Please contact the system administrator.</div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  if (isLoading || pollData.proc_start === null) {
    return (
      <BaseLayout>
        <div className="h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <Head />
      <div>
        <DashboardTopArea done={pollData.done} proc_start={pollData.proc_start} proc_end={pollData.proc_end} />
        <div className="px-4 min-w-screen-xl max-w-screen-2xl m-auto pt-60">
          <DashboardTable plants={pollData.plants} />
        </div>
      </div>
    </BaseLayout>
  );
}

export default HomePage;
