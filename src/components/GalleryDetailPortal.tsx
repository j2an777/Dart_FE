import { galleryDetailStore } from '@/stores/modal';
import GalleryDetail from '@/pages/gallery/components/galleryDetail';
import { createPortal } from 'react-dom';

const GalleryDetailPortal = () => {
    const { galleryDetailValue } = galleryDetailStore();
    const $portal_root = document.getElementById('gallery-detail-portal');

    return (
        <>
            {$portal_root 
                ? createPortal(
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 200,
                    }}>
                        {galleryDetailValue.open && galleryDetailValue.gallery && (
                            <GalleryDetail imageData={galleryDetailValue.gallery}/>
                        )}
                    </div>,
                    $portal_root,
                )
                : null}
        </>
    );
};

export default GalleryDetailPortal;
