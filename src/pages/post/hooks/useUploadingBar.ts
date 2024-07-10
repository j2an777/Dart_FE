import { useState, useCallback, useEffect } from 'react';
import { memberStore } from '@/stores/member';
import { Event, EventSourcePolyfill } from 'event-source-polyfill';
import { MyCustomEvent, SSEData } from '@/types/gallery';
import { progressStore } from '@/stores/modal';

const useUploadingBar = () => {
  const accessToken = memberStore((state) => state.accessToken);
  const [data, setData] = useState<number>(0);
  const setProgress = progressStore((state) => state.setProgress);

  const getProgressData = useCallback(() => {
    const newEventSource = new EventSourcePolyfill(
      `${import.meta.env.VITE_BASE_URL}/galleries/progress`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
        heartbeatTimeout: 86400000,
      },
    );

    newEventSource.addEventListener('notification', function (event: Event) {
      const data = (event as MyCustomEvent).data;
      const parsedData: SSEData = JSON.parse(data);
      const progressData = parsedData.message;

      return setData(progressData);
    });

    newEventSource.onerror = async () => {
      newEventSource.close();
    };
    return newEventSource;
  }, [accessToken, data]);

  useEffect(() => {
    setProgress(data);
  }, [data]);
  return { getProgressData };
};

export default useUploadingBar;
