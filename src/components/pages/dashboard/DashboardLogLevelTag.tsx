import React from 'react';
import { MonitorDataLog } from 'types/api';

interface OwnProps {
  level: MonitorDataLog['level'];
}

const levels = {
  INFO: { name: 'info', color: 'bg-blue-700' },
  WARNING: { name: 'warning', color: 'bg-yellow-500' },
  ERROR: { name: 'error', color: 'bg-red-600' },
};

export const DashboardLogLevelTag = ({ level }: OwnProps) => {
  return (
    <div className={`text-white ${levels[level].color} px-1.5 py-0.25 w-14 rounded text-xs inline-block text-center`}>
      {levels[level].name}
    </div>
  );
};
