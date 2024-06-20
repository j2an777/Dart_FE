import { GalleryDataProps } from '@/types/gallery';
import * as S from './styles';
import Card from './card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import useImagesLoaded from '@/pages/gallery/hooks/useImagesLoaded';
import { CircleLoader } from '@/components';

const GalleryScroll = ({ galleryData }: GalleryDataProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    const imageSources = galleryData ? galleryData.images.map(img => img.image) : [];
    const isLoaded = useImagesLoaded(imageSources);

    if (!isLoaded) {
        return <CircleLoader />;
    }

    return (
        <S.Container ref={container}>
            {galleryData.images.map((gallery, index) => {
                const targetScale = 1 - ((galleryData.images.length - index) * 0.05);
                return (
                    <Card 
                        key={index} 
                        i={index} 
                        gallery={gallery} 
                        progress={scrollYProgress} 
                        range={[index * 0.05, 1]} 
                        targetScale={targetScale}
                    />
                );
            })}
        </S.Container>
    );
}

export default GalleryScroll;
