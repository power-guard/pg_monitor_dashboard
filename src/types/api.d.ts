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

interface Plant {
  [key: string]: MonitorData;
}

export interface PollResponse {
  done: boolean;
  proc_start: string;
  proc_end: string;
  plants: Plant;
}
