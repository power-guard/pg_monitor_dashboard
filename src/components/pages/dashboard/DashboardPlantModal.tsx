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
        <div className="flex justify-between items-center border-b border-gray-300 px-12 py-3">
          <div className="flex space-x-2 items-center">
            <h1 className="text-lg">{data?.id}</h1>
            <h2 className="text-sm text-gray-500">{data?.name}</h2>
          </div>
          <button
            className="cursor-pointer select-none hover:text-gray-400 text-xl p-2 focus:outline-none"
            onClick={onCloseButton}
          >
            x
          </button>
        </div>
        <div className="px-12 py-12 flex space-x-8 max-h-80">
          <div className="overflow-y-auto pr-8">
            {data?.logs && data.logs.length > 0 ? (
              <div className="text-gray-600 text-sm mb-3">{`${data.logs.length} log${
                data.logs.length > 1 ? 's' : ''
              }`}</div>
            ) : (
              <div className="w-64 italic">No logs</div>
            )}
            <div>
              <ul className="space-y-2">
                {data?.logs.map((log, index) => (
                  <DashboardLogRow key={index} log={log} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-128 h-56">
            <EnergySeriesChart data={data?.energy_series ? data.energy_series : []} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
