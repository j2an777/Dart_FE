

import { GalleryImages } from '@/types/gallery';
import * as S from './styles';
import { Dimmed, Icon, Text } from '@/components';
import { useEffect, useRef } from 'react';

type GalleryDetailProps = {
    imageData: GalleryImages | null;
    onClose: () => void;
}

const GalleryDetail = ({ imageData, onClose }: GalleryDetailProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const toHandleBack = () => {
        onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            onClose();
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