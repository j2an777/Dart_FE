import * as S from './styles';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import GalleryDetail from '../galleryDetail';
import { galleryImages } from '@/types/gallery';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { Text } from '@/components';

const GalleryMain = () => {
  const [degrees, setDegrees] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [selectedData, setSelectedData] = useState<galleryImages | null>(null);
  const [transZ, setTransZ] = useState(400);
  const [size, setSize] = useState(250);
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
  
      switch (true) {
        case (galleryData.images.length >= 11 && galleryData.images.length < 15):
          setSize(200);
          setTransZ(480);
          break;
        case (galleryData.images.length >= 15):
          setSize(150);
          setTransZ(550);
          break;
        default:
          setTransZ(500);
          setSize(250);
          break;
      }
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  return (
    <S.Container>
      <S.MainBlock degrees={degrees} size={size}>
        {galleryData?.images.map((gallery: galleryImages, index: number) => (
          <S.ImageBox 
            key={index}
            i={index} 
            isFront={index === frontIndex} 
            dataDegree={dataDegree}
            transZ={transZ}
            onClick={() => onHandlePopup(gallery)}>
            <img src={gallery.image} alt={gallery.imageTitle} />
            <S.ContentBox size={size}>
              <Text typography='t5' bold='semibold' color='white'>Gallery {index+1}</Text>
              <Text typography='t7' bold='thin' color='white'>{gallery.imageTitle}</Text>
            </S.ContentBox>
          </S.ImageBox>
        ))}
        <Text typography='t3' bold='bold' color='white'>{galleryData.title}</Text>
      </S.MainBlock>
      {galleryData.images.length > 1 && (
        <S.BtnBlock>
          <S.Btn className='previous' onClick={() => onHandleChange('previous')}>Previous</S.Btn>
          <S.Btn className='next' onClick={() => onHandleChange('next')}>Next</S.Btn>
        </S.BtnBlock>
      )}
      {popUp && (
        <GalleryDetail imageData={selectedData} onClose={onHandleClose}/>
      )}
    </S.Container>
  );
}

export default GalleryMain;
