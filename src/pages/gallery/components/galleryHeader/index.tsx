import * as S from './styles';
import GalleryLogo from '@/assets/images/galleryLogo.png';
import { Icon } from '@/components';
import { alertStore } from '@/stores/modal';
import ReviewModal from '../reviewModal';
import { useNavigate, useParams } from 'react-router-dom';
import { PostReview } from '@/types/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReview } from '@/apis/review';

const GalleryHeader = () => {
  const open = alertStore((state) => state.open);
  const close = alertStore((state) => state.close);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { galleryId: galleryIdStr } = useParams<{ galleryId?: string }>();
  const galleryId = galleryIdStr ? parseInt(galleryIdStr, 10) : NaN;

  const mutation = useMutation({
    mutationKey: ['review'],
    mutationFn: async (data: PostReview) => postReview(data),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['review'],
      })
    },
  });

  const handleReviewSubmit = (data: PostReview & { rating: number }) => {
    if (!isNaN(galleryId)) {
      mutation.mutateAsync({ ...data, galleryId });
    } else {
      console.error('Invalid galleryId');
    }
  };

  const onHandleToggle = (name: string) => {
    if (name === 'review') {
      open({
        title: '후기 등록하기',
        description: <ReviewModal onSubmit={handleReviewSubmit} close={close}/>,
        buttonLabel: '등록',
        onClickButton: () => {
          const form = document.querySelector('form');
          if (form) {
            form.requestSubmit();
          }
        },
      });
    } else if (name === 'chat') {
      // 여기에 채팅창 열어지는 함수 호출 구문 작성
      // ******* 채팅 ********
    } else if (name === 'out') {
      open({
        title: '전시관 나가기',
        description: '전시관에서 나가시겠습니까?',
        buttonLabel: '확인',
        onClickButton: () => {
          navigate(-1);
        },
      });
    } else {
      open({
        title: '전시관 나가기',
        description: '전시관에서 나가시겠습니까?',
        buttonLabel: '확인',
        onClickButton: () => {
          navigate('/intro');
        },
      });
    }
  };

  return (
    <S.HeaderContainer>
      <S.MenuBlock>
        <S.Logo src={GalleryLogo} onClick={() => onHandleToggle('toMain')} />
        <S.MenuBox>
          <Icon
            value="review"
            size={30}
            onClick={() => onHandleToggle('review')}
            strokeColor="white"
          />
          <Icon value="chat" size={30} onClick={() => onHandleToggle('chqt')} />
          <Icon value="out" size={30} onClick={() => onHandleToggle('out')} />
        </S.MenuBox>
      </S.MenuBlock>
      <S.CopyRight>&copy; 2024 Gallery from D'art.</S.CopyRight>
    </S.HeaderContainer>
  );
};

export default GalleryHeader;
