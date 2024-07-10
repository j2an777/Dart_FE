import { CategoryModal } from '@/pages/main/components';
import { categoryModalStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import useGetMediaQuerySize from '@/hooks/useGetMediaQuerySize';
import { useEffect } from 'react';

const CategoryPortal = () => {
  const {
    close,
    value: { open },
  } = categoryModalStore();
  const $portal_root = document.getElementById('category-portal');
  const size = useGetMediaQuerySize(1315);
  useEffect(() => {
    if (!(size === 'select')) close();
  }, [size]);
  return (
    <>
      {$portal_root
        ? createPortal(
            <div>
              <AnimatePresence>{open && <CategoryModal close={close} />}</AnimatePresence>
            </div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default CategoryPortal;
