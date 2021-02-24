
import React, { useState } from 'react';
import { MonitorData, Plants } from 'types/api';
import { DashboardPlantModal } from './DashboardPlantModal';
import { EnergySeriesChart } from 'components/EnergySeriesChart';
import { getDistanteToNow, getFormattedDate } from 'utils/viewUtils';

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
              {plant.id} {plant.name}
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
        </thead>
        <tbody>
          {Object.entries(plants).map(([id, data]) => (
            <tr key={id}>
              <td>
                <div onClick={() => onSystemIdClick(data)}>{id}</div>
                {data.name}
              </td>
              <td>{data.last_update}</td>
              <td>
                {data.logs.map((log, index) => (
                  <div key={index}>
                    {log.level}
                    {log.date}
                    {log.description}
                  </div>
                ))}
              </td>
              <td>Table</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <DashboardPlantModal data={activePlant} onClose={onModalClose} />}
    </>
  );
};
