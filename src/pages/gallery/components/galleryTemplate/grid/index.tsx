import { GalleryDataProps, GalleryImages } from "@/types/gallery"
import * as S from './styles';
import { CircleLoader, GalleryDetailPortal, Text } from "@/components";
import { useEffect, useRef, useState } from "react";
import { galleryDetailStore } from "@/stores/modal";
import useImagesLoaded from "@/pages/gallery/hooks/useImagesLoaded";

const GalleryGrid = ({ galleryData }: GalleryDataProps) => {
  console.log(galleryData);

  const galleryRef = useRef<HTMLDivElement>(null);
  const { open } = galleryDetailStore();
  const [isAtTop, setIsAtTop] = useState(true);

  const imageSources = galleryData ? galleryData.images.map(img => img.image) : [];
  const isLoaded = useImagesLoaded(imageSources);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        setIsAtTop(galleryRef.current.scrollTop === 0);
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll);
    }

    // Cleanup event listener
    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!isLoaded) {
    return <CircleLoader />;
  }

  return (
    <S.Container ref={galleryRef}>
      {isAtTop && <Text typography="t6" bold="thin" color="white" className="Title">스크롤을 통해 관람 가능합니다.</Text>}
      <S.GridGallery>
        {galleryData?.images.map((gallery: GalleryImages, index: number) => (
          <S.ImageBox key={index} onClick={() => open(gallery)}>
            <img src={gallery.image} alt={gallery.imageTitle} />
            <S.ContentBox>
              <Text typography='t5' color='white' bold='thin'>Gallery {index + 1}</Text>
              <Text typography='t3' color='white' bold='semibold' className="description">{gallery.imageTitle}</Text>
            </S.ContentBox>
          </S.ImageBox>
        ))}
      </S.GridGallery>
      <GalleryDetailPortal />
    </S.Container>
  )
}

export default GalleryGrid