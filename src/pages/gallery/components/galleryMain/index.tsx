import * as S from './styles';
import { useState } from 'react';
import { GalleryData } from '@/consts/index';

const GalleryMain = () => {
  const [degrees, setDegrees] = useState(0);

  const onHandleChange = (translate: string) => {
    if (translate === 'previous') {
      setDegrees(degrees + 60);
    } else {
      setDegrees(degrees - 60);
    }
  };

  const getFrontIndex = () => {
    return (Math.round(degrees / 60) % GalleryData.images.length + GalleryData.images.length) % GalleryData.images.length;
  };

  const frontIndex = getFrontIndex();

  return (
    <S.Container>
      <S.MainBlock degrees={degrees}>
        {GalleryData.images.map((gallery, index) => (
          <S.ImageBox key={index} i={index} isFront={index === frontIndex}>
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
    </S.Container>
  );
}

export default GalleryMain;
