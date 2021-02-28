import React from 'react';
import { MonitorDataLog } from 'types/api';
import { getFormattedDate } from 'utils/viewUtils';

import { DashboardLogLevelTag } from './DashboardLogLevelTag';

interface OwnProps {
  log: MonitorDataLog;
}

export const DashboardLogRow = ({ log }: OwnProps) => {
  return (
    <div className="space-x-4 mb-1 text-xs whitespace-nowrap">
      <DashboardLogLevelTag level={log.level} />
      <span className="text-gray-400">{getFormattedDate(log.date)}</span>
      <span>{log.description}</span>
    </div>
  );
};
