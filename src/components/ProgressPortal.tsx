import ProgressModal from '@/pages/post/components/progressModal';
import { progressStore } from '@/stores/modal';
import { createPortal } from 'react-dom';

const ProgressPortal = () => {
    const { progressValue } = progressStore();
    const $portal_root = document.getElementById('progress-portal');

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
                        {progressValue.open && (
                            <ProgressModal progress={progressValue.progress}/>
                        )}
                    </div>,
                    $portal_root,
                )
                : null}
        </>
    );
};

export default ProgressPortal;
