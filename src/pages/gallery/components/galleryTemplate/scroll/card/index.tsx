import { useRef } from 'react';
import * as S from './styles';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { GalleryDetailPortal, Text } from '@/components';
import { GalleryImages } from '@/types/gallery';
import { galleryDetailStore } from '@/stores/modal';

interface CardProps {
  gallery: GalleryImages;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ gallery, i, progress, range, targetScale }: CardProps) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const { open } = galleryDetailStore();

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <S.Container ref={container} onClick={() => open(gallery)}>
      <S.CardItem style={{ scale, top: `calc(0% + ${i * 10}px)` }}>
        <S.CardImg>
          <S.CardInner style={{ scale: imageScale }}>
            <img src={gallery.image} />
          </S.CardInner>
        </S.CardImg>
      </S.CardItem>
      <S.ContentBox>
        <Text typography='t3' color='white' bold='thin'>Gallery {i + 1}</Text>
        <Text typography='t1' color='white' bold='semibold' className='description'>{gallery.imageTitle}</Text>
      </S.ContentBox>
      <GalleryDetailPortal />
    </S.Container>
  );
};

export default Card;
