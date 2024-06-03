import * as S from './styles';
import { useEffect, useState } from 'react';
import GalleryDetail from '../galleryDetail';
import { galleryData, galleryImages } from '@/types/gallery';

const GalleryMain = () => {
  const [degrees, setDegrees] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [selectedData, setSelectedData] = useState<galleryImages | null>(null);
  const [galleryData, setGalleryData] = useState<galleryData>({ title: '', thumbnail: '', isFirst: false, images: [] });
  const [transZ, setTransZ] = useState(400);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/galleries');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: galleryData = await response.json();
        setGalleryData(data);

        if (data.images.length === 9) {
          setTransZ(450);
        } else if (data.images.length === 10) {
          setTransZ(480);
        } else if (data.images.length === 20) {
          setTransZ(1000);
        }
      } catch (error) {
        console.error('Failed to fetch gallery data:', error);
      }
    };

    fetchData();
  }, []);

  const dataDegree = 360 / galleryData.images.length;

  const onHandleChange = (translate: string) => {
    if (translate === 'previous') {
      setDegrees(degrees + dataDegree);
      setFrontIndex((frontIndex - 1 + galleryData.images.length) % galleryData.images.length);
    } else {
      setDegrees(degrees - dataDegree);
      setFrontIndex((frontIndex + 1) % galleryData.images.length);
    }
  };

  const onHandlePopup = (imageData: galleryImages) => {
    setSelectedData(imageData);
    setPopUp(true);
  };

  const onHandleClose = () => {
    setPopUp(false);
    setSelectedData(null);
  };

  return (
    <S.Container>
      <S.MainBlock degrees={degrees}>
        {galleryData.images.map((gallery, index) => (
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
        // <ExplainModal />
        <GalleryDetail imageData={selectedData} onClose={onHandleClose}/>
      )}
    </S.Container>
  );
}

export default GalleryMain;
