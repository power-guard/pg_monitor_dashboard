import React from 'react';

import { DashboardProcessCard, DashboardProcessCardProps } from './DashboardProcessCard';

interface OwnProps extends DashboardProcessCardProps {}

export const DashboardTopArea = (props: OwnProps) => {
  return (
    <div className="bg-warmGray-100 fixed w-full">
      <div className="pt-16 px-4 min-w-screen-xl max-w-screen-2xl m-auto">
        <div className="flex pb-4">
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
        <div className="border-t border-gray-200 pb-4"></div>
        <div className="flex bg-brand-400 text-white shadow-md rounded-t-lg round-r-lg font-bold">
          <div className="py-2 pl-12 pr-6 whitespace-nowrap w-56">System ID/Name</div>
          <div className="py-2 px-6 whitespace-nowrap w-52">Last Update Time</div>
          <div className="py-2 px-6 whitespace-nowrap flex-grow">Logs</div>
          <div className="py-2 pl-6 pr-12 whitespace-nowrap w-128">Energy (kWh)</div>
        </div>
      </div>
    </div>
  );
};
