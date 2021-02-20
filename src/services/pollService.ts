import { mockPollResponse } from 'mockUtils/mockPollResponse';
import { axiosInstance } from 'services/apiCore';
import { PollResponse } from 'types/api';

export const poll = {
  fetch: (): Promise<PollResponse> => {
    if (process.env.NEXT_PUBLIC_FETCH_MOCK_DATA === 'true') return new Promise((resolve) => resolve(mockPollResponse));

    return axiosInstance.get<PollResponse>('/poll').then((res) => {
      return res.data;
    });
  },
};
