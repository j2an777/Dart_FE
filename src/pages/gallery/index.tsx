import GalleryHeader from './components/galleryHeader';
import * as S from './styles';
import LogoLoader from '@/components/logoLoader';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { useQuery } from '@tanstack/react-query';
import SelectTemplate from './hooks/selectTemplate';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { useEffect } from 'react';

const GalleryPage = () => {
  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;
  const navigate = useCustomNavigate();

  const {
    data: galleryData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['galleryData'],
    queryFn: () => getGallery(galleryId),
  });
  console.log(galleryData);

  useEffect(() => {
    if (galleryData?.hasTicket === false) {
      navigate('/');
    }
  }, []);

  if (error || !galleryData) {
    return <div>Error loading gallery data</div>;
  }

  if (isLoading) {
    return <LogoLoader />;
  }

  const expand = galleryData && galleryData.template === 'four' ? galleryData.images.length : 0;

  return (
    <S.Container expand={expand}>
      <GalleryHeader
        chatRoomId={galleryData.chatRoomId}
        galleryId={galleryId}
        galleryNick={galleryData.nickname}
        title={galleryData.title}
        thumbnail={galleryData.images[0].image}
      />
      <SelectTemplate template={galleryData.template} galleryData={galleryData} />
    </S.Container>
  );
};

export default GalleryPage;
