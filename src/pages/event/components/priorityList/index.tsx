import { useRef } from 'react';
import { PriorityCoupon } from '..';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { PriorityCoupon as PriorityListProps } from '@/types/coupon';

import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styles';

const PriorityList = ({ array }: { array: PriorityListProps[] }) => {
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
        loop={array.length > 1}
        slidesPerView={1}
        navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {array.map((coupon, index) => (
          <SwiperSlide key={index}>
            <PriorityCoupon {...coupon} />
          </SwiperSlide>
        ))}
      </Swiper>
      <S.DirectionButton value="leftArrow" size={50} $active={false} onClick={onPrev} />
      <S.DirectionButton
        value="leftArrow"
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
