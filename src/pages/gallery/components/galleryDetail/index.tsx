

import { galleryImages } from '@/types/gallery';
import * as S from './styles';
import { Dimmed, Icon, Text } from '@/components';

type GalleryDetailProps = {
    imageData: galleryImages | null;
    onClose: () => void;
}

const GalleryDetail = ({ imageData, onClose }: GalleryDetailProps) => {

    const toHandleBack = () => {
        onClose();
    };
    
    return (
        <>
            <Dimmed />
            <S.Container frameBg={imageData?.image}>
                <Dimmed />
                <S.Frame
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.5,
                    }}>
                    <img src={imageData?.image} />
                </S.Frame>
                <S.DetailContent>
                    <Icon 
                        value='cancel' 
                        size={30} 
                        onClick={toHandleBack}
                        color='white'/>
                    <S.DetailText
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                        }}>
                        <Text typography='t1' bold='bold' color='white'>{imageData?.imageTitle}</Text>
                        <Text typography='t5' color='white' bold='thin'>{imageData?.description}</Text>
                    </S.DetailText>
                </S.DetailContent>
            </S.Container>
        </>
    )
}

export default GalleryDetail