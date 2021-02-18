import React from 'react';

interface OwnProps {
  done: boolean;
  proc_start: null | string;
  proc_end: null | string;
}

export const DashboardTopArea = ({ done, proc_start, proc_end }: OwnProps) => {
  return (
    <div>
      <div>
        <h1>PG Monitoring Utilities</h1>
        <h2>PG Monitor Dashboard</h2>
      </div>
      <div>
        <div>
          <div>
            <div>Data Collection Process</div>
            <div>{done ? 'Complete' : 'Running'}</div>
          </div>
          <div>
            <div>Started</div>
            <div>{proc_start !== null ? proc_start : '-'}</div>
          </div>
          <div>
            <div>Finished</div>
            <div>{proc_end !== null ? proc_end : '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
