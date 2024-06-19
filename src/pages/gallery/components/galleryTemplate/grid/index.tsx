import { GalleryDataProps, GalleryImages } from "@/types/gallery"
import * as S from './styles';
import { Icon, Text } from "@/components";
import { useRef, useState } from "react";
import GalleryDetail from "../../galleryDetail";

const GalleryGrid = ({ galleryData }: GalleryDataProps) => {
  const [state, setState] = useState({
    popUp: false,
    selectedData: null as GalleryImages | null,
  });

  const galleryRef = useRef<HTMLDivElement>(null);

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
          <S.ImageBox key={index} onClick={() => onHandlePopup('open', gallery)}>
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
      {state.popUp && (
      <GalleryDetail imageData={state.selectedData} onClose={() => onHandlePopup('close')} />
      )}
    </S.Container>
  )
}

export default GalleryGrid