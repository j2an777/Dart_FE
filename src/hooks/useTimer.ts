import { useEffect, useState } from 'react';

const useTimer = ({ time = 300 }: { time?: number }) => {
  const [count, setCount] = useState<number>(time);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    if (count === 0) clearInterval(timer);
    return () => clearInterval(timer);
  }, [count]);

  const getSeconds = () => {
    const seconds = Number(Math.floor(count % 60));
    if (seconds >= 10) return String(seconds);
    return `0${seconds}`;
  };
  const getMinutes = () => {
    const minutes = Number(Math.floor((count % 3600) / 60));
    if (minutes >= 10) return String(minutes);
    return `0${minutes}`;
  };
  const getHours = () => {
    const hours = Number(Math.floor(count / 3600));
    if (hours >= 10) return String(hours);
    return `0${hours}`;
  };
  return { hours: getHours(), minutes: getMinutes(), seconds: getSeconds() };
};

export default useTimer;
