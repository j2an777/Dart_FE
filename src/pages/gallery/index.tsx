import GalleryHeader from './components/galleryHeader';
import * as S from './styles';
import LogoLoader from '@/components/logoLoader';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { useQuery } from '@tanstack/react-query';
import SelectTemplate from './hooks/selectTemplate';
import { useEffect, useState } from 'react';

const GalleryPage = () => {

  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;
  const template = "four";
  const [loading, setLoading] = useState(true);

  const { data: galleryData, error } = useQuery({
    queryKey: ['galleryData'],
    queryFn: () => getGallery(galleryId),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3초 동안 로고 로더 표시

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  if(loading) {
    return <LogoLoader/>;
  }
  
  return (
    <S.Container>
      <GalleryHeader galleryId={galleryId} galleryNick={galleryData.nickname}/>
      <SelectTemplate template={template} galleryData={galleryData} />
    </S.Container>
  )
}

export default GalleryPage