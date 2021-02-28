import { EnergySeriesChart } from 'components/EnergySeriesChart';
import { Modal } from 'components/Modal';
import React from 'react';
import { MonitorData } from 'types/api';

import { DashboardLogRow } from './DashboardLogRow';

interface OwnProps {
  onClose: () => void;
  data?: MonitorData;
}

export const DashboardPlantModal = ({ onClose, data }: OwnProps) => {
  const onCloseButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="border-0 rounded-lg shadow-lg flex flex-col bg-white">
        <div className="flex justify-between items-center border-b border-gray-300 px-8 py-2">
          <div className="flex space-x-2 items-center">
            <h1 className="text-lg">{data?.id}</h1>
            <h2 className="text-sm text-gray-500">{data?.name}</h2>
          </div>
          <button className="cursor-pointer select-none hover:text-gray-400 text-xl p-2" onClick={onCloseButton}>
            x
          </button>
        </div>
        <div className="px-8 py-6 flex space-x-8">
          <ul>
            {data?.logs.map((log, index) => (
              <DashboardLogRow key={index} log={log} />
            ))}
          </ul>
          <div className="w-128">
            <div>
              <EnergySeriesChart data={data?.energy_series ? data.energy_series : []} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
