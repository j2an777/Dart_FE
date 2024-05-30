

import { galleryData } from '@/types/gallery';
import * as S from './styles';
import { Dimmed, Icon, Text } from '@/components';

type GalleryDetailProps = {
    imageData: galleryData | null;
    onClose: () => void;
}

const GalleryDetail = ({ imageData, onClose }: GalleryDetailProps) => {

    const toHandleBack = () => {
        onClose();
    };
    
    return (
        <>
            <Dimmed />
            <S.Container>
                <S.Frame>
                    <img src={imageData?.image} />
                </S.Frame>
                <S.DetailContent>
                    <S.Top>
                        <Text typography='t1' bold='bold'>{imageData?.imageTitle}</Text>
                        <Icon 
                            value='cancel' 
                            size={20} 
                            onClick={toHandleBack}
                            color='gray600'/>
                    </S.Top>
                    <Text typography='t5'>{imageData?.description}</Text>
                </S.DetailContent>
            </S.Container>
        </>
    )
}

export default GalleryDetail