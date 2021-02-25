import React from 'react';

import { DashboardProcessCard, DashboardProcessCardProps } from './DashboardProcessCard';

interface OwnProps extends DashboardProcessCardProps {}

export const DashboardTopArea = (props: OwnProps) => {
  return (
    <div className="bg-warmGray-100 fixed w-full">
      <div className="pt-16 min-w-screen-xl max-w-screen-2xl m-auto flex px-4">
        <div className="flex flex-grow items-center">
          <div>
            <h1 className="text-3xl font-bold">PG Monitoring Utilities</h1>
            <h2 className="text-base">PG Monitor Dashboard</h2>
          </div>
        </div>
        <div>
          <DashboardProcessCard {...props} />
        </div>
      </div>
    </div>
  );
};
