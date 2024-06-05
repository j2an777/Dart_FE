import { galleryInfoStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { GalleryInfo } from '@/pages/main/components';

const GalleryInfoPortal = () => {
  const { value, close } = galleryInfoStore();
  const $portal_root = document.getElementById('gallery-info-portal');
  return (
    <>
      {$portal_root
        ? createPortal(<div>{value && <GalleryInfo close={close} />}</div>, $portal_root)
        : null}
    </>
  );
};

export default GalleryInfoPortal;
