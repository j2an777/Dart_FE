import { useState, useCallback, useEffect } from 'react';
import { memberStore } from '@/stores/member';
import { Event, EventSourcePolyfill } from 'event-source-polyfill';
import { MyCustomEvent, SSEData } from '@/types/gallery';
import { getNewToken } from '@/apis/member';
import { progressStore } from '@/stores/modal';

interface CustomErrorEvent extends Event {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  target: {
    _listeners: Record<string, unknown>;
    url: string;
    readyState: number;
    withCredentials: boolean;
    headers: {
      Authorization: string;
      'Content-Type': string;
      Connection: string;
      Accept: string;
    };
  };
}

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

    newEventSource.onerror = async (event: Event) => {
      if (isCustomErrorEvent(event)) {
        if (event.status === 401) {
          try {
            await getNewToken();
            getProgressData();
          } catch (err) {
            throw new Error('이건 답이 없는데?');
          }
        }
      }
      newEventSource.close();
    };
    return newEventSource;
  }, [accessToken, data]);

  useEffect(() => {
    setProgress(data);
  }, [data]);
  return { getProgressData };
};

function isCustomErrorEvent(event: Event): event is CustomErrorEvent {
  return 'status' in event && 'statusText' in event && 'headers' in event;
}

export default useUploadingBar;
