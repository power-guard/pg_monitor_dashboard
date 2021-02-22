import React from 'react';
import { MonitorData } from 'types/api';

interface OwnProps {
  plants: MonitorData[];
}

export const DashboardTable = ({ plants }: OwnProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>System ID/Name</th>
          <th>Last Update Time</th>
          <th>Logs</th>
          <th>Energy Series</th>
        </tr>
      </thead>
      <tbody>
        {plants.map((plant) => (
          <tr key={plant.id}>
            <td>
              {plant.id} {plant.name}
            </td>
            <td>{plant.last_update}</td>
            <td>
              {plant.logs.map((log, index) => (
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
  );
};
