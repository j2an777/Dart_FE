import { useEffect, useRef, useState } from 'react';

const useOutsideClick = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  const excludeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      if (excludeRef.current && excludeRef.current.contains(e.target as Node)) return;
      setIsExpand(false);
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  const onToggle = () => setIsExpand((prev) => !prev);
  return { isExpand, setIsExpand, onToggle, ref, excludeRef };
};

export default useOutsideClick;
