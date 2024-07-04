import { GalleryDataProps, GalleryImages } from '@/types/gallery';
import * as S from './styles';
import { galleryDetailStore } from '@/stores/modal';
import useImagesLoaded from '@/pages/gallery/hooks/useImagesLoaded';
import { CircleLoader, GalleryDetailPortal, Icon, Text } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import { useRef, useState } from 'react';

const Mobile = ({ galleryData }: GalleryDataProps) => {
  const { open } = galleryDetailStore();

  const imageSources = galleryData ? galleryData.images.map(img => img.image) : [];
  const isLoaded = useImagesLoaded(imageSources);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [play, setPlay] = useState(true);

  if (!isLoaded) {
    return <CircleLoader />;
  }

  const onHandleDirection = (direction: string) => {
    if (swiperRef.current) {
        if (direction === 'left') {
            swiperRef.current.slidePrev();
        } else if (direction === 'right') {
            swiperRef.current.slideNext();
        } else if (direction === 'play') {
          setPlay(!play);
          
          if (play) {
            swiperRef.current.autoplay.stop();
          } else {
            swiperRef.current.autoplay.start();
          }
        }
    }
  };

  return (
    <S.Container>
      <Swiper
        onSwiper={(swiper) => swiperRef.current = swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {galleryData?.images.map((gallery: GalleryImages, index: number) => (
          <SwiperSlide key={index} className='swiperSlide' onClick={() => open(gallery)}>
              <S.ImageBox>
                <img src={gallery.image} alt={gallery.image} />
                <Text typography='t7' bold='regular' color='white'>{gallery.imageTitle}</Text>
              </S.ImageBox>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.BtnBlock>
        <S.Btn onClick={() => onHandleDirection('left')}><Icon value='leftArrow' size={50} color="white" /></S.Btn>
        <S.Btn onClick={() => onHandleDirection('play')}>{play ? <Icon value='triangle' size={48} color="white" /> : <Icon value='stop' size={50} color="white" />}</S.Btn>
        <S.Btn onClick={() => onHandleDirection('right')}><Icon value='rightArrow' size={50} color="white" /></S.Btn>
      </S.BtnBlock>
      <GalleryDetailPortal />
    </S.Container>
  )
}

export default Mobile;