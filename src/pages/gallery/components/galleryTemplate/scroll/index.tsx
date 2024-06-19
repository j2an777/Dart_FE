import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GalleryDataProps } from '@/types/gallery';
import * as S from './styles';

const GalleryScroll = ({ galleryData }: GalleryDataProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.item') ?? [];
    items.forEach((item) => {
      const img = item.querySelector('.item-img');
      gsap.set(img, { scale: 0 });
    });

    const setScale = () => {
      items.forEach((item) => {
        const img = item.querySelector('.item-img') as HTMLElement;
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollRatio = Math.min(Math.max((rect.top + rect.height / 2) / viewportHeight, 0), 1);
        gsap.to(img, { scale: scrollRatio });
      });
    };

    setScale();
    window.addEventListener('scroll', setScale);
    return () => {
      window.removeEventListener('scroll', setScale);
    };
  }, [galleryData.images]);

  return (
    <S.Container ref={containerRef}>
      {galleryData.images.map((gallery, index) => (
        <S.GalleryBox key={index} className="item">
          <h1>{gallery.imageTitle}</h1>
          <S.ImageBox className="item-img">
            <img src={gallery.image} alt={gallery.imageTitle} />
          </S.ImageBox>
        </S.GalleryBox>
      ))}
    </S.Container>
  );
};

export default GalleryScroll;
