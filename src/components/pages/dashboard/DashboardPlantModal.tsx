import { Modal } from 'components/Modal';
import React from 'react';
import { MonitorData } from 'types/api';

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
        <div>
          <h1>{data?.name}</h1>
          <button onClick={onCloseButton}> x </button>
        </div>
        <div>
          <ul>
            {data?.logs.map((log, index) => (
              <li key={index}>
                {log.level}
                {log.date}
                {log.description}
              </li>
            ))}
          </ul>
          <div>TABLE</div>
        </div>
      </div>
    </Modal>
  );
};
