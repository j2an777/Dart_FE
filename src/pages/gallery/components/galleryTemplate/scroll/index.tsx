import { GalleryDataProps } from '@/types/gallery';
import * as S from './styles';
import Card from './card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const GalleryScroll = ({ galleryData }: GalleryDataProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const colors = [
        { color: '#bbacaf'},
        { color: '#977f60'},
        { color: '#c2491d'},
        { color: '#b62429'},
        { color: '#88a28d'},
    ];

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    return (
        <S.Container ref={container}>
            {galleryData.images.map((gallery, index) => {
                const targetScale = 1 - ((galleryData.images.length - index) * 0.05);
                const colorIndex = index % colors.length;
                const cardColor = colors[colorIndex].color;
                return (
                    <Card 
                        key={index} 
                        i={index} 
                        gallery={gallery} 
                        progress={scrollYProgress} 
                        range={[index * 0.05, 1]} 
                        targetScale={targetScale}
                        color={cardColor}
                    />
                );
            })}
        </S.Container>
    );
}

export default GalleryScroll;
