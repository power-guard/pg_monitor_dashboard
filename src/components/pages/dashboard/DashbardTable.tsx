import { EnergySeriesChart } from 'components/EnergySeriesChart';
import React, { useState } from 'react';
import { MonitorData } from 'types/api';
import { getDistanteToNow, getFormattedDate } from 'utils/viewUtils';

import { DashboardPlantModal } from './DashboardPlantModal';

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
      <table>
        <thead>
          <tr>
            <th>System ID/Name</th>
            <th>Last Update Time</th>
            <th>Logs</th>
            <th>Energy</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td>
                <div onClick={() => onSystemIdClick(plant)}>{plant.id}</div>
                {plant.name}
              </td>
              <td>{plant.last_update && getDistanteToNow(plant.last_update)}</td>
              <td>
                {plant.logs.map((log, index) => (
                  <div key={index}>
                    {log.level}
                    {getFormattedDate(log.date)}
                    {log.description}
                  </div>
                ))}
              </td>
              <td>
                <EnergySeriesChart data={plant.energy_series} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <DashboardPlantModal data={activePlant} onClose={onModalClose} />}
    </>
  );
};
