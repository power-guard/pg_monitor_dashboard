import { axiosInstance } from 'services/apiCore';
import { PollResponse } from 'types/api';

export const poll = {
  fetch: (): Promise<PollResponse> => {
    return axiosInstance.get<PollResponse>('/poll').then((res) => {
      return res.data;
    });
  },
};
