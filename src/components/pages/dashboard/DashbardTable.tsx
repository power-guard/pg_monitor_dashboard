import React from 'react';
import { Plants } from 'types/api';

interface OwnProps {
  plants: Plants;
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
        {Object.entries(plants).map(([id, data]) => (
          <tr key={id}>
            <td>
              {id} {data.name}
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
  );
};
