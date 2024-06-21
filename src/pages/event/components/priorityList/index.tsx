import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styles';

import { Pagination, Navigation } from 'swiper/modules';
import { PriorityCoupon } from '..';
import { useRef } from 'react';

const PriorityList = () => {
  const sliderRef = useRef<SwiperRef>(null);
  const onNext = () => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext();
  };
  const onPrev = () => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev();
  };
  return (
    <S.Container>
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PriorityCoupon />
        </SwiperSlide>
        <SwiperSlide>
          <PriorityCoupon />
        </SwiperSlide>
        <SwiperSlide>
          <PriorityCoupon />
        </SwiperSlide>
      </Swiper>
      <S.DirectionButton value="left" size={50} $active={false} onClick={onPrev} />
      <S.DirectionButton
        value="left"
        $rotate={true}
        size={50}
        $active={false}
        onClick={onNext}
        isNext={true}
      />
    </S.Container>
  );
};

export default PriorityList;
