import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetMypage from '../../hooks/useGetMypage';
import Ticket from './Ticket';
import { pageStore } from '@/stores/page';
import { useStore } from 'zustand';
import { Gallery } from '@/types/gallery';
import { NoneData, PageButtons } from '@/components';
import { memberStore } from '@/stores/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { deleteGallery } from '@/apis/gallery';
import { alertStore } from '@/stores/modal';
import * as S from './styles';

const Exhibition = () => {
  // 타인 정보 조회
  const { memberId } = useParams<{ memberId: string }>();
  // 본인 정보 조회
  const authNickname = memberStore((state) => state.auth.nickname);
  const nickname = memberId ?? authNickname;
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data, refetch } = useGetMypage(nickname, pageInfo.pageIndex, 2);
  const navigate = useCustomNavigate();
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
      {data && data.pages.length > 0 ? (
        data.pages.map((data: Gallery) => (
          <S.Box key={data.galleryId}>
            <Ticket
              key={data.galleryId}
              thumbnail={data.thumbnail}
              title={data.title}
              startDate={data.startDate}
              endDate={data.endDate}
              fee={data.fee}
              hashtags={data.hashtags}
              galleryId={data.galleryId}
              onGallery={onGallery}
              onDelete={onDelete}
              isOwner={authNickname === nickname}
            />
          </S.Box>
        ))
      ) : (
        <NoneData content="개최한 전시가 없습니다." />
      )}
      <footer>
        <PageButtons />
      </footer>
    </S.Container>
  );
};

export default Exhibition;
