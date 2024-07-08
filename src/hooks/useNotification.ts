import { useEffect, useState } from 'react';
import { memberStore } from '@/stores/member';
import { Event, EventSourcePolyfill, MessageEvent } from 'event-source-polyfill';
import { NotificationResponse } from '@/types/notification';

interface DataValues extends NotificationResponse {
  count: number;
}

const useNotification = () => {
  const accessToken = memberStore((state) => state.accessToken);

  const [data, setData] = useState<NotificationResponse>({
    message: '',
    type: null,
  });
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const connect = () => {
      const EventSource = EventSourcePolyfill;
      const eventSource = new EventSource(
        `${import.meta.env.VITE_BASE_URL}/notifications/subscribe`,
        {
          withCredentials: true,
          heartbeatTimeout: 3600000,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      eventSource.addEventListener('notification', function (event: Event) {
        const sse = event as MessageEvent;
        const response = JSON.parse(sse.data);
        setCount((prev) => prev + 1);

        return setData(response);
      });

      return () => {
        eventSource.close();
      };
    };
    connect();
  }, [accessToken]);

  return {
    count,
    ...data,
  } as DataValues;
};

export default useNotification;
