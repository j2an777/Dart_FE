

import { GalleryImages } from '@/types/gallery';
import * as S from './styles';
import { Dimmed, Icon, Text } from '@/components';
import { useEffect, useRef } from 'react';
import { galleryDetailStore } from '@/stores/modal';

type GalleryDetailProps = {
    imageData: GalleryImages | null;
}

const GalleryDetail = ({ imageData }: GalleryDetailProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const close = galleryDetailStore(state => state.close);

    const toHandleBack = () => {
        close();
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <>
            <Dimmed />
            <S.Container frameBg={imageData?.image} style={{ zIndex : 200 }} ref={containerRef}>
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
                        color='black'/>
                    <S.DetailText
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                        }}>
                        <Text typography='t1' bold='bold' color='black'>{imageData?.imageTitle}</Text>
                        <Text typography='t5' color='black' bold='thin'>{imageData?.description}</Text>
                    </S.DetailText>
                </S.DetailContent>
            </S.Container>
        </>
    )
}

export default GalleryDetail