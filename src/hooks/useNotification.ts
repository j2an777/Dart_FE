import { useEffect, useState } from 'react';
import { memberStore } from '@/stores/member';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

const useNotification = () => {
  const accessToken = memberStore((state) => state.accessToken);
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const eventSource = new EventSource(
    `${import.meta.env.VITE_BASE_URL}/notifications/subscribe`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    eventSource.onopen = () => {
      console.log('정상적으로 연결되었습니다');
    };

    eventSource.addEventListener('SSE', (event: any) => {
      console.log(data);
      return setData(event);
    });

    return () => eventSource.close();
  }, []);
  return data;
};

export default useNotification;
