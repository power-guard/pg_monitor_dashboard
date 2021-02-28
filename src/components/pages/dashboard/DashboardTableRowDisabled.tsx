import { EnergySeriesChart } from 'components/EnergySeriesChart';
import { Lamp, lampColors } from 'components/Lamp';
import { DL_STATUS } from 'constants/api';
import React from 'react';
import { MonitorData } from 'types/api';

interface OwnProps {
  plant: MonitorData;
  index: number;
}

const status = {
  0: { name: 'Queued', description: 'Data download not yet started', flag: 'default' },
  1: { name: 'Running', description: 'Data download in progress', flag: 'warning' },
  2: { name: 'Done', description: 'Data download complete', flag: 'success' },
  4: { name: 'Error', description: 'Failed to download data', flag: 'error' },
};

export const DashboardTableRowDisabled = ({ plant, index }: OwnProps) => {
  const verticalPadding = index === 0 ? 'pt-9 pb-7' : 'py-7';

  return (
    <tr className={`border-b border-gray-200 bg-gray-100`}>
      <td className={`${verticalPadding} pl-12 pr-6 max-w-56`}>
        <div className="text-gray-500 font-semibold">{plant.id}</div>
        <div className="text-gray-600 text-xs truncate reverse-ellipsis">{plant.name}</div>
      </td>

      <td className={`${verticalPadding} px-6`}>
        <div
          className={`flex items-center whitespace-nowrap italic ${
            plant.dl_status === DL_STATUS.ERROR ? 'text-red-800' : ''
          }`}
        >
          <Lamp type={status[plant.dl_status].flag as keyof typeof lampColors} />
          {status[plant.dl_status].name}
        </div>
      </td>

      <td className={`${verticalPadding} px-6 text-gray-500 italic`}>
        {plant.dl_status === DL_STATUS.ERROR ? status[plant.dl_status].description : ''}
      </td>

      <td className={`${verticalPadding} pr-12`}>
        <div className="max-h-56 opacity-50">
          <EnergySeriesChart data={plant.energy_series} />
        </div>
      </td>
    </tr>
  );
};
