import { GalleryDataProps, GalleryImages } from '@/types/gallery';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { CircleLoader, GalleryDetailPortal, Icon, Text } from '@/components';
import { useRef, useState } from 'react';
import { galleryDetailStore } from '@/stores/modal';
import useImagesLoaded from '@/pages/gallery/hooks/useImagesLoaded';

const GallerySlide = ({ galleryData }: GalleryDataProps) => {
    const [state, setState] = useState({
        frontIndex: 0
    });

    const swiperRef = useRef<SwiperClass | null>(null);
    const { open } = galleryDetailStore();

    const imageSources = galleryData ? galleryData.images.map(img => img.image) : [];
    const isLoaded = useImagesLoaded(imageSources);

    const handleSlideChange = (swiper: SwiperClass) => {
        setState((prevState) => ({
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

    if (!isLoaded) {
        return <CircleLoader />;
    }

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
                            onClick={() => open(gallery)}
                            isFront={index === state.frontIndex}
                        >
                            <Text typography='t3' color='white' bold='thin'>Gallery {index + 1}</Text>
                            <Text typography='t1' color='white' bold='semibold' className='description'>{gallery.imageTitle}</Text>
                        </S.ContentBox>
                    </SwiperSlide>
                ))}
            </Swiper>
            {galleryData.images.length > 1 && (
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
                            color={state.frontIndex === galleryData.images.length - 1 ? 'gray600' : 'white'}
                            $active={state.frontIndex === galleryData.images.length - 1 ? false : true}/>
                    </S.Btn>
                </S.BtnBlock>
            )}
            <GalleryDetailPortal />
        </S.Container>
    );
};

export default GallerySlide;
