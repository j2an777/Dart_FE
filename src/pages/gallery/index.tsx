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
import disableDevtool from 'disable-devtool';
import { alertStore } from '@/stores/modal';
import ErrorData from '../editMemberInfo/components/errorData';

const GalleryPage = () => {
  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);

  const {
    data: galleryData,
    error,
    isLoading,
    refetch
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
  }, [accessToken, connect, disconnect]);

  // 개발자 도구 방지 및 스크린샷 방지
  useEffect(() => {
    const currentURL = window.location.pathname;

    if (currentURL.includes(`/gallery/${galleryId}`)) {
      disableDevtool({
        ondevtoolopen: () => {
          window.close(); // 페이지를 닫습니다.
        },
        ondevtoolclose: () => {
          console.log('개발자 도구가 닫혔습니다.');
        },
      });
  
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
  
      const handlePrintScreen = (e: KeyboardEvent) => {
        if (e.key === 'PrintScreen') {
          navigator.clipboard.writeText('');
          open({
            title: '스크린샷',
            description: '전시 내에서는 스크린샷 불가능합니다.',
            buttonLabel: '확인',
            onClickButton: () => {
              close();
            },
          });
        }
      };
  
      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handlePrintScreen);
      document.addEventListener('keyup', handlePrintScreen);
  
      return () => {
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handlePrintScreen);
        document.removeEventListener('keyup', handlePrintScreen);
      };
    }
  }, [galleryId, open]);

  if (error || !galleryData) {
    return <ErrorData retry={refetch}/>;
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
