import * as S from './styles';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import GalleryDetail from '../galleryDetail';
import { galleryImages } from '@/types/gallery';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';

const GalleryMain = () => {
  const [degrees, setDegrees] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [selectedData, setSelectedData] = useState<galleryImages | null>(null);
  const [transZ, setTransZ] = useState(400);
  const [dataDegree, setDataDegree] = useState(0);

  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;

  const { data: galleryData, error, isLoading } = useQuery({
    queryKey: ['galleryData'],
    queryFn: () => getGallery(galleryId),
  });

  useEffect(() => {
    if (galleryData) {
      setDataDegree(360 / galleryData.images.length);
      if (galleryData.images.length === 9) {
        setTransZ(450);
      } else if (galleryData.images.length >= 10) {
        setTransZ(480);
      } else {
        setTransZ(400);
      }
    }
  }, [galleryData]);

  const onHandleChange = (translate: string) => {
    if (!galleryData) return;

    if (translate === 'previous') {
      setDegrees(degrees + dataDegree);
      setFrontIndex((frontIndex - 1 + galleryData.images.length) % galleryData.images.length);
    } else {
      setDegrees(degrees - dataDegree);
      setFrontIndex((frontIndex + 1) % galleryData.images.length);
    }
    console.log(frontIndex);
  };

  const onHandlePopup = (imageData: galleryImages) => {
    setSelectedData(imageData);
    setPopUp(true);
  };

  const onHandleClose = () => {
    setPopUp(false);
    setSelectedData(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  return (
    <S.Container>
      <S.MainBlock degrees={degrees}>
        {galleryData?.images.slice(0, 10).map((gallery: galleryImages, index: number) => (
          <S.ImageBox 
            key={index} 
            i={index} 
            isFront={index === frontIndex} 
            dataDegree={dataDegree}
            transZ={transZ}
            onClick={() => onHandlePopup(gallery)}>
            <img src={gallery.image} alt={gallery.imageTitle} />
            <S.ContentBox>
              <h1>{gallery.imageTitle}</h1>
              <p>{gallery.description}</p>
            </S.ContentBox>
          </S.ImageBox>
        ))}
      </S.MainBlock>
      <S.BtnBlock>
        <S.Btn className='previous' onClick={() => onHandleChange('previous')}>Previous</S.Btn>
        <S.Btn className='next' onClick={() => onHandleChange('next')}>Next</S.Btn>
      </S.BtnBlock>
      {popUp && (
        <GalleryDetail imageData={selectedData} onClose={onHandleClose}/>
      )}
    </S.Container>
  );
}

export default GalleryMain;