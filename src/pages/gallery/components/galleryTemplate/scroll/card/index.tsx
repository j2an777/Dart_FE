import { useRef, useState } from 'react';
import * as S from './styles';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { Text } from '@/components';
import GalleryDetail from '../../../galleryDetail';
import { GalleryImages } from '@/types/gallery';

interface CardProps {
  gallery: GalleryImages;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  color: string;
}

const Card = ({ gallery, i, progress, range, targetScale, color }: CardProps) => {
  const [state, setState] = useState({
    popUp: false,
    selectedData: null as GalleryImages | null,
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const onHandlePopup = (popup: string, imageData?: GalleryImages) => {
    setState(prevState => {
      if (imageData && popup === 'open') {
        return {
          ...prevState,
          selectedData: imageData,
          popUp: true
        };
      } else if (popup === 'close') {
        return {
          ...prevState,
          popUp: false,
          selectedData: null
        };
      }
      return prevState;
    });
  };

  return (
    <S.Container ref={container} onClick={() => onHandlePopup('open', gallery)}>
      <S.CardItem style={{ scale, top: `calc(0% + ${i * 25}px)` }} bgColor={color}>
        <S.CardImg>
          <S.CardInner style={{ scale: imageScale }}>
            <img src={gallery.image} />
          </S.CardInner>
        </S.CardImg>
      </S.CardItem>
      <S.ContentBox>
        <Text typography='t3' color='white' bold='semibold'>Gallery {i + 1}</Text>
        <Text typography='t1' color='white' bold='semibold'>{gallery.imageTitle}</Text>
      </S.ContentBox>
      {state.popUp && (
        <GalleryDetail imageData={state.selectedData} onClose={() => onHandlePopup('close')} />
      )}
    </S.Container>
  );
};

export default Card;
