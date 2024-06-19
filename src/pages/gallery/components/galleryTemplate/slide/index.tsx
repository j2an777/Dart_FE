import { GalleryDataProps, GalleryImages } from '@/types/gallery';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Icon, Text } from '@/components';
import { useRef, useState } from 'react';
import GalleryDetail from '../../galleryDetail';

const GallerySlide = ({ galleryData }: GalleryDataProps) => {
  const [state, setState] = useState({
    popUp: false,
    selectedData: null as GalleryImages | null,
    frontIndex: 0
  });

  const swiperRef = useRef<SwiperClass | null>(null);

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

  const handleSlideChange = (swiper: SwiperClass) => {
    setState(prevState => ({
      ...prevState,
      frontIndex: swiper.activeIndex
    }));
  };

  const onHandleDirection = (direction: string) => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <S.Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={handleSlideChange}
        className='gallerySwiper'
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {galleryData?.images.map((gallery: GalleryImages, index: number) => (
          <SwiperSlide key={index} className='swiperSlide'>
            <img src={gallery.image} alt={gallery.image} />
            <S.ContentBox
              onClick={() => onHandlePopup('open', gallery)}
              isFront={index === state.frontIndex}
            >
              <Text typography='t3' color='white' bold='semibold'>Gallery {index + 1}</Text>
              <Text typography='t5' color='white' bold='semibold'>{gallery.imageTitle}</Text>
            </S.ContentBox>
          </SwiperSlide>
        ))}
      </Swiper>
      {galleryData.images.length > 0 && (
      <S.BtnBlock>
        <S.Btn onClick={() => onHandleDirection('left')}>
          <Icon 
            value='leftArrow' 
            size={50} 
            color={state.frontIndex === 0 ? 'gray500' : 'white'}
            $active={state.frontIndex === 0 ? false : true}/>
        </S.Btn>
        <S.Btn onClick={() => onHandleDirection('right')}>
          <Icon 
            value='rightArrow' 
            size={50} 
            color={state.frontIndex === galleryData.images.length-1 ? 'gray600' : 'white'}
            $active={state.frontIndex === galleryData.images.length-1 ? false : true}/>
        </S.Btn>
      </S.BtnBlock>
      )}
      {state.popUp && (
        <GalleryDetail imageData={state.selectedData} onClose={() => onHandlePopup('close')} />
      )}
    </S.Container>
  );
}

export default GallerySlide;
