import { GalleryDataProps, GalleryImages } from "@/types/gallery"
import * as S from './styles';
import { GalleryDetailPortal, Icon, Text } from "@/components";
import { useRef } from "react";
import { galleryDetailStore } from "@/stores/modal";

const GalleryGrid = ({ galleryData }: GalleryDataProps) => {

  const galleryRef = useRef<HTMLDivElement>(null);
  const { open } = galleryDetailStore();

  const onHandleScroll = (direction: string) => {
    const scrollAmount = 250; // 스크롤할 픽셀 양

    if (galleryRef.current) {
      if (direction === 'up') {
        galleryRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'down') {
        galleryRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <S.Container ref={galleryRef}>
      <S.GridGallery>
        {galleryData?.images.map((gallery: GalleryImages, index: number) => (
          <S.ImageBox key={index} onClick={() => open(gallery)}>
            <img src={gallery.image} alt={gallery.imageTitle} />
            <S.ContentBox>
              <Text typography='t3' color='white' bold='semibold'>Gallery {index + 1}</Text>
              <Text typography='t5' color='white' bold='semibold'>{gallery.imageTitle}</Text>
            </S.ContentBox>
          </S.ImageBox>
        ))}
      </S.GridGallery>
      <S.Title>
        <Text typography='t1' bold='bold' color='white' className='galleryTitle'>{galleryData.title}</Text>
      </S.Title>
      {galleryData.images.length > 1 && (
        <S.BtnBlock>
          <S.Btn className='previous' onClick={() => onHandleScroll('up')}><Icon value='upArrow' size={50} color="white" /></S.Btn>
          <S.Btn className='next' onClick={() => onHandleScroll('down')}><Icon value='downArrow' size={50} color="white" /></S.Btn>
        </S.BtnBlock>
      )}
      <GalleryDetailPortal />
    </S.Container>
  )
}

export default GalleryGrid