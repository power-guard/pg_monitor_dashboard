interface MonitorDataLog {
  date: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  description: string;
}

interface EnergySeries {
  [key: string]: number;
}

interface MonitorData {
  name: string;
  has_error: boolean;
  last_update: null | string;
  energy_series: EnergySeries[];
  logs: MonitorDataLog[];
}

export interface Plants {
  [key: string]: MonitorData;
}

export interface PollResponse {
  done: boolean;
  proc_start: string | null;
  proc_end: string | null;
  plants: Plants;
}
