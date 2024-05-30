

import { galleryData } from '@/types/gallery';
import * as S from './styles';
import { Dimmed, Icon } from '@/components';

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
                        <S.Title>{imageData?.imageTitle}</S.Title>
                        <Icon 
                            value='cancel' 
                            size={20} 
                            onClick={toHandleBack}
                            color='gray600'/>
                    </S.Top>
                    <S.Content>{imageData?.description}</S.Content>
                </S.DetailContent>
            </S.Container>
        </>
    )
}

export default GalleryDetail