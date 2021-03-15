import React from 'react';
import { MonitorDataLog } from 'types/api';
import { getFormattedDate } from 'utils/viewUtils';

import { DashboardLogLevelTag } from './DashboardLogLevelTag';

interface OwnProps {
  log: MonitorDataLog;
  isTruncated?: boolean;
}

export const DashboardLogRow = ({ log, isTruncated = false }: OwnProps) => {
  return (
    <div className="flex space-x-4 mb-1 text-xs whitespace-nowrap">
      <DashboardLogLevelTag level={log.level} />
      <div className="text-gray-400">{getFormattedDate(log.date)}</div>
      <div className={`${isTruncated ? 'max-w-56' : 'max-w-lg'}`}>
        <div className={`${isTruncated ? 'truncate' : 'whitespace-normal'}`}>{log.description}</div>
      </div>
    </div>
  );
};
