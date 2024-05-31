import * as S from './styles';
import { useEffect, useState } from 'react';
import { GalleryData } from '@/consts/gallery';
import GalleryDetail from '../galleryDetail';
import { galleryData } from '@/types/gallery';
import ExplainModal from '@/components/modal/explainModal';

const GalleryMain = () => {
  const [degrees, setDegrees] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [selectedData, setSelectedData] = useState<galleryData | null>(null);

  const dataDegree = 360 / GalleryData.images.length;
  const [transZ, setTransZ] = useState(400);

  useEffect(() => {
    if (GalleryData.images.length === 9) {
      setTransZ(450);
    } else if (GalleryData.images.length === 10) {
      setTransZ(480);
    }
  }, []);

  const onHandleChange = (translate: string) => {
    if (translate === 'previous') {
      setDegrees(degrees + dataDegree);
      setFrontIndex((frontIndex - 1 + GalleryData.images.length) % GalleryData.images.length);
    } else {
      setDegrees(degrees - dataDegree);
      setFrontIndex((frontIndex + 1) % GalleryData.images.length);
    }
  };

  const onHandlePopup = (imageData: galleryData) => {
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
        {GalleryData.images.map((gallery, index) => (
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
        <ExplainModal />
        // <GalleryDetail imageData={selectedData} onClose={onHandleClose}/>
      )}
    </S.Container>
  );
}

export default GalleryMain;
