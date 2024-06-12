import { useEffect, useRef, useState } from 'react';

const useOutsideClick = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setIsExpand(false);
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  const onToggle = () => setIsExpand((prev) => !prev);
  return { isExpand, onToggle, ref };
};

export default useOutsideClick;
