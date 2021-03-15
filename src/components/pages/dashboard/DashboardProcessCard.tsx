import { Lamp } from 'components/Lamp';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { Tooltip } from 'components/Tooltip';
import { CONFIG } from 'config/admin';
import React, { useEffect, useState } from 'react';
import { getDistanteToNow, getElapsedTime, getFormattedDate } from 'utils/viewUtils';

export interface DashboardProcessCardProps {
  done: boolean;
  proc_start: null | string;
  proc_end: null | string;
}

export const DashboardProcessCard = ({ done, proc_start, proc_end }: DashboardProcessCardProps) => {
  const [isAlertOn, setIsAlertOn] = useState(false);

  useEffect(() => {
    const elapsedTime = getElapsedTime(proc_start!);
    if (elapsedTime > CONFIG.PROC_START_ALERT_THRESHOLD) setIsAlertOn(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white rounded-lg shadow-md px-5 py-3 w-96">
      <div className="flex justify-between mb-3">
        <div className="text-sm font-bold whitespace-nowrap">Data Collection Process</div>
        <span
          className={`${done ? 'bg-green-500' : 'bg-yellow-500'} text-white font-bold rounded px-2 py-0.5 select-none`}
        >
          {done ? (
            'Complete'
          ) : (
            <div className="flex">
              <div className="pr-1 transform translate-y-1">
                <LoadingSpinner color="warning" size="sm" />
              </div>
              Running
            </div>
          )}
        </span>
      </div>

      <div className="flex flex-nowrap mb-2">
        <div className="w-20 text-right text-gray-500 px-3 mr-3">Started</div>
        <div className="flex-grow">
          <div className="flex items-center">
            <Lamp type={proc_start === null ? 'default' : isAlertOn ? 'error' : 'success'} />
            <Tooltip title="Recommended solution: Restart the utility server." isOpen={isAlertOn} disableHoverListener>
              <div className={`whitespace-nowrap ${isAlertOn ? 'text-red-500' : ''}`}>
                {proc_start !== null ? getDistanteToNow(proc_start) : ''}
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2 text-xs text-gray-400 whitespace-nowrap">
            {proc_start !== null ? getFormattedDate(proc_start) : '-'}
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap">
        <div className="w-20 text-right text-gray-500 px-3 mr-3">Finished</div>
        <div className="flex-grow">
          <div className="flex items-center">
            <Lamp type={proc_end !== null ? 'success' : 'default'} />
            <div className="whitespace-nowrap">{proc_end !== null ? getDistanteToNow(proc_end) : ''}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2 text-xs text-gray-400 whitespace-nowrap">
            {proc_end !== null ? getFormattedDate(proc_end) : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};
