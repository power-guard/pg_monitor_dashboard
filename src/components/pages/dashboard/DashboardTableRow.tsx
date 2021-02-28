import { EnergySeriesChart } from 'components/EnergySeriesChart';
import { Lamp } from 'components/Lamp';
import React from 'react';
import { MonitorData } from 'types/api';
import { getDistanteToNow } from 'utils/viewUtils';

import { DashboardLogRow } from './DashboardLogRow';

interface OwnProps {
  plant: MonitorData;
  index: number;
  onSystemIdClick: (selectedPlant: MonitorData) => void;
}

export const DashboardTableRow = ({ plant, index, onSystemIdClick }: OwnProps) => {
  const verticalPadding = index === 0 ? 'pt-9 pb-7' : 'py-7';

  return (
    <tr className={`border-b border-gray-200`}>
      <td className={`${verticalPadding} pl-12 pr-6 max-w-56`}>
        <div
          className="text-brand-400 font-semibold hover:text-brand-300 underline cursor-pointer"
          onClick={() => onSystemIdClick(plant)}
        >
          {plant.id}
        </div>
        <div className="text-gray-600 text-xs truncate reverse-ellipsis">{plant.name}</div>
      </td>

      <td className={`${verticalPadding} px-6`}>
        <div className="flex items-center whitespace-nowrap">
          <Lamp type="success" />
          {plant.last_update && getDistanteToNow(plant.last_update)}
        </div>
      </td>

      <td className={`${verticalPadding} px-6`}>
        {plant.logs.length > 0 ? (
          <div>
            {plant.logs.slice(0, 5).map((log, index) => (
              <DashboardLogRow key={index} log={log} />
            ))}

            {plant.logs.length > 5 ? (
              <div className="text-xs text-gray-500">{`+ ${plant.logs.length - 5} log${
                plant.logs.length - 5 > 1 ? 's' : ''
              }`}</div>
            ) : null}
          </div>
        ) : (
          <div className="text-gray-500 italic">No logs</div>
        )}
      </td>

      <td className={`${verticalPadding} pr-12`}>
        <div className="max-h-56">
          <EnergySeriesChart data={plant.energy_series} />
        </div>
      </td>
    </tr>
  );
};
