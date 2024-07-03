import { galleryInfoStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { GalleryInfo } from '@/pages/main/components';
import { useNavigate } from 'react-router-dom';

const GalleryInfoPortal = () => {
  const { galleryInfoValue, close } = galleryInfoStore();
  const $portal_root = document.getElementById('gallery-info-portal');
  const navigate = useNavigate();

  const handleClose = () => {
    close();
    navigate(-1);
  };

  return (
    <>
      {$portal_root
        ? createPortal(
            <div>
              {galleryInfoValue.open && (
                <GalleryInfo close={handleClose} {...galleryInfoValue} />
              )}
            </div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default GalleryInfoPortal;