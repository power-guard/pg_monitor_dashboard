interface MonitorDataLog {
  date: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  description: string;
}

interface EnergySeries {
  [key: string]: number | null;
}

export interface MonitorData {
  id: string;
  name: string;
  dl_status: number;
  last_update: null | string;
  energy_series: EnergySeries[];
  logs: MonitorDataLog[];
}

export interface PollResponse {
  done: boolean;
  proc_start: string | null;
  proc_end: string | null;
  plants: MonitorData[];
}
