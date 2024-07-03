import { useEffect, useState } from 'react';

export type SizeValues = 'mobile' | 'tablet' | 'desktop';

const useGetMediaQuerySize = () => {
  const [size, setSize] = useState<SizeValues>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSize('mobile');
      } else if (window.innerWidth < 1024) {
        setSize('tablet');
      } else {
        setSize('desktop');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export default useGetMediaQuerySize;
