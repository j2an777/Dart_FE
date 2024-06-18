import { useEffect, useRef, useState } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeace = () => setIsHovered(false);
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', onMouseEnter);
      node.addEventListener('mouseleave', onMouseLeace);
    }
    return () => {
      if (node) {
        node.addEventListener('mouseenter', onMouseEnter);
        node.addEventListener('mouseleave', onMouseLeace);
      }
    };
  }, []);

  return { isHovered, ref };
};

export default useHover;
