import GalleryHeader from './components/galleryHeader';
import * as S from './styles';
import LogoLoader from '@/components/logoLoader';
import { useParams } from 'react-router-dom';
import { getGallery } from '@/apis/gallery';
import { useQuery } from '@tanstack/react-query';
import SelectTemplate from './hooks/selectTemplate';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { useEffect } from 'react';
import { ChatPortal } from '@/components';
import { memberStore } from '@/stores/member';
import useStomp from '../chatModal/hooks/useStomp';

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

  useEffect(() => {
    if (galleryData?.hasTicket === false) {
      navigate('/');
    }
  }, [galleryData, navigate]);

  // 웹소켓 연결
  const { accessToken } = memberStore.getState();
  const { connect, disconnect } = useStomp(
    galleryData?.chatRoomId as number,
    accessToken as string,
  );
  useEffect(() => {
    if (accessToken) {
      connect();
    }
    return () => disconnect();
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
        thumbnail={galleryData.thumbnail}
        content={galleryData.content}
        nickName={galleryData.nickname}
      />
      <SelectTemplate template={galleryData.template} galleryData={galleryData} />
      <ChatPortal />
    </S.Container>
  );
};

export default GalleryPage;
