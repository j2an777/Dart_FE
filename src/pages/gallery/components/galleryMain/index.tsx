import * as S from './styles';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import GalleryDetail from '../galleryDetail';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { Text } from '@/components';
import { GalleryImages } from '@/types/gallery';

const GalleryMain = () => {
  const [state, setState] = useState({
    degrees: 0,
    frontIndex: 0,
    popUp: false,
    selectedData: null as GalleryImages | null,
    transZ: 400,
    size: 250,
    dataDegree: 0
  });

  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;

  const { data: galleryData, error, isLoading } = useQuery({
    queryKey: ['galleryData'],
    queryFn: () => getGallery(galleryId),
  });

  useEffect(() => {
    if (galleryData) {
      const newDataDegree = 360 / galleryData.images.length;
      let newSize = 250;
      let newTransZ = 500;
  
      if (galleryData.images.length >= 11 && galleryData.images.length < 15) {
        newSize = 200;
        newTransZ = 480;
      } else if (galleryData.images.length >= 15) {
        newSize = 150;
        newTransZ = 550;
      }

      setState(prevState => ({
        ...prevState,
        dataDegree: newDataDegree,
        size: newSize,
        transZ: newTransZ
      }));
    }
  }, [galleryData]);
  
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    // document 또는 특정 요소에 이벤트 리스너 추가
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const onHandleChange = (translate: string) => {
    if (!galleryData) return;

    setState(prevState => {
      const newDegrees = translate === 'previous' 
        ? prevState.degrees + prevState.dataDegree 
        : prevState.degrees - prevState.dataDegree;
      const newFrontIndex = translate === 'previous' 
        ? (prevState.frontIndex - 1 + galleryData.images.length) % galleryData.images.length 
        : (prevState.frontIndex + 1) % galleryData.images.length;

      return {
        ...prevState,
        degrees: newDegrees,
        frontIndex: newFrontIndex
      };
    });
  };

  const onHandlePopup = (imageData: GalleryImages) => {
    setState(prevState => ({
      ...prevState,
      selectedData: imageData,
      popUp: true
    }));
  };

  const onHandleClose = () => {
    setState(prevState => ({
      ...prevState,
      popUp: false,
      selectedData: null
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  return (
    <S.Container>
      <S.MainBlock degrees={state.degrees} size={state.size}>
        {galleryData?.images.map((gallery: GalleryImages, index: number) => (
          <S.ImageBox 
            key={index}
            i={index} 
            isFront={index === state.frontIndex} 
            dataDegree={state.dataDegree}
            transZ={state.transZ}
            onClick={() => onHandlePopup(gallery)}>
            <img src={gallery.image} alt={gallery.imageTitle} />
            <S.ContentBox size={state.size}>
              <Text typography='t5' bold='semibold' color='white'>Gallery {index+1}</Text>
              <Text typography='t7' bold='thin' color='white'>{gallery.imageTitle}</Text>
            </S.ContentBox>
          </S.ImageBox>
        ))}
        <Text typography='t1' bold='bold' color='white' className='galleryTitle'>{galleryData.title}</Text>
      </S.MainBlock>
      {galleryData.images.length > 1 && (
        <S.BtnBlock>
          <S.Btn className='previous' onClick={() => onHandleChange('previous')}>Previous</S.Btn>
          <S.Btn className='next' onClick={() => onHandleChange('next')}>Next</S.Btn>
        </S.BtnBlock>
      )}
      {state.popUp && (
        <GalleryDetail imageData={state.selectedData} onClose={onHandleClose}/>
      )}
    </S.Container>
  );
}

export default GalleryMain;
