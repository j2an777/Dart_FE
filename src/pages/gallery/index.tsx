import GalleryHeader from './components/galleryHeader';
import * as S from './styles';
import LogoLoader from '@/components/logoLoader';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { useQuery } from '@tanstack/react-query';
import SelectTemplate from './hooks/selectTemplate';
import useCustomNavigate from '@/hooks/useCustomNavigate';

const GalleryPage = () => {

  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;
  const navigate = useCustomNavigate();

  const { data: galleryData, error, isLoading } = useQuery({
    queryKey: ['galleryData'],
    queryFn: () => getGallery(galleryId),
  });

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  if(isLoading) {
    return <LogoLoader />;
  }

  if (galleryData.hasTicket === false) {
    navigate('/');
    return null;
  }

  const expand = galleryData && galleryData.template === "four" ? galleryData.images.length : 0;
  
  return (
    <S.Container expand={expand}>
      <GalleryHeader galleryId={galleryId} galleryNick={galleryData.nickname}/>
      <SelectTemplate template={galleryData.template} galleryData={galleryData} />
    </S.Container>
  )
}

export default GalleryPage