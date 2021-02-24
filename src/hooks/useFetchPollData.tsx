import { AxiosError } from 'axios';
import { CONFIG } from 'config/admin';
import { useEffect, useState } from 'react';
import { poll } from 'services/pollService';
import { PollResponse } from 'types/api';

const initialPollData: PollResponse = {
  done: false,
  proc_start: null,
  proc_end: null,
  plants: [],
};

export const useFetchPollData = () => {
  const [pollData, setPollData] = useState<PollResponse>(initialPollData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const fetchData = (isInitialFetch?: boolean) => {
      if (isInitialFetch) setIsLoading(true);

      poll
        .fetch()

        .then((data: PollResponse) => {
          setPollData(data);
          if (isInitialFetch) setIsLoading(false);

          if (!data.done) {
            setTimeout(() => {
              fetchData();
            }, CONFIG.POLL_DATA_FETCH_INTERVAL);
          }
        })

        .catch((error: AxiosError) => {
          setError(error);
          if (isInitialFetch) setIsLoading(false);
        });
    };

    fetchData(true);
  }, []);

  return { pollData, isLoading, error };
};
