import { useEffect, useState } from 'react';

export type SizeValues = 'mobile' | 'tablet' | 'desktop' | 'select';

const useGetMediaQuerySize = (selectSize?: number) => {
  const [size, setSize] = useState<SizeValues>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (selectSize && window.innerWidth < selectSize) {
        return setSize('select');
      }
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
