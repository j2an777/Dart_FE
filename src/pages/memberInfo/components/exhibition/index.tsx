import { useEffect } from 'react';
import useGetMypage from '../../hooks/useGetMypage';
import Ticket from './Ticket';
import { pageStore } from '@/stores/page';
import { useStore } from 'zustand';
import { Gallery } from '@/types/gallery';
import { PageButtons } from '@/components';
import { memberStore } from '@/stores/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { deleteGallery } from '@/apis/gallery';
import { alertStore } from '@/stores/modal';
import * as S from './styles';

const Exhibition = () => {
  const navigate = useCustomNavigate();
  const { nickname } = memberStore((state) => state.auth);
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data, refetch } = useGetMypage(nickname, pageInfo.pageIndex, 2);
  const open = alertStore((state) => state.open);

  useEffect(() => {
    if (data) {
      setPageInfo(data.pageParams);
    }
  }, [data, setPageInfo]);

  const onGallery = (galleryId: number) => {
    open({
      title: '전시 입장',
      description: '전시관에 입장하시겠습니까?',
      buttonLabel: '확인',
      onClickButton: () => {
        navigate(`/gallery/${galleryId}`);
      },
    });
  };

  const onDelete = (galleryId: number) => {
    open({
      title: '전시 삭제',
      description: (
        <div>
          <S.ModalText typography="t5" bold="regular">
            전시 삭제 이후에는 복구가 불가능합니다.
          </S.ModalText>
          <S.ModalText typography="t5" bold="regular">
            전시를 삭제하시겠습니까?
          </S.ModalText>
        </div>
      ),
      buttonLabel: '확인',
      onClickButton: async () => {
        await deleteGallery(galleryId);
        refetch();
      },
    });
  };

  return (
    <S.Container>
      {data?.pages.map((data: Gallery) => (
        <S.Box>
          <S.Block>
            <S.Button onClick={() => onGallery(data.galleryId)}>입장</S.Button>
            <S.Button onClick={() => onDelete(data.galleryId)}>삭제</S.Button>
          </S.Block>
          <Ticket
            key={data.galleryId}
            thumbnail={data.thumbnail}
            title={data.title}
            startDate={data.startDate}
            endDate={data.endDate}
            fee={data.fee}
            hashtags={data.hashtags}
          />
        </S.Box>
      ))}
      <footer>
        <PageButtons />
      </footer>
    </S.Container>
  );
};

export default Exhibition;
