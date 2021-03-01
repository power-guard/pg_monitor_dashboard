import React, { useState } from 'react';
import { MonitorData } from 'types/api';

import { DashboardPlantModal } from './DashboardPlantModal';
import { DashboardTableRow } from './DashboardTableRow';
import { DashboardTableRowDisabled } from './DashboardTableRowDisabled';

interface OwnProps {
  plants: MonitorData[];
}

export const DashboardTable = ({ plants }: OwnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlant, setActivePlant] = useState<MonitorData>();

  const onSystemIdClick = (selectedPlant: MonitorData) => {
    setActivePlant(selectedPlant);
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const onModalClose = () => {
    setActivePlant(undefined);
    setIsModalOpen(false);
  };

  return (
    <>
      <table className="w-full bg-white rounded-b-lg rounded-l-lg shadow-lg mb-8">
        <thead>
          <tr>
            <th className="w-56"></th>
            <th className="w-52"></th>
            <th className=""></th>
            <th className="w-128"></th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) =>
            plant.dl_status === 2 ? (
              <DashboardTableRow key={plant.id} index={index} plant={plant} onSystemIdClick={onSystemIdClick} />
            ) : (
              <DashboardTableRowDisabled key={plant.id} index={index} plant={plant} />
            ),
          )}
        </tbody>
      </table>
      {isModalOpen && <DashboardPlantModal data={activePlant} onClose={onModalClose} />}
    </>
  );
};
