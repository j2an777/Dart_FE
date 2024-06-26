import { alertStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import axios from 'axios';
import { PostGalleries } from '@/types/post';

export const useHandleErrors = () => {
  const open = alertStore((state) => state.open);
  const navigate = useCustomNavigate();

  const handleErrors = (error: unknown, data: PostGalleries) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      open({
        title: '재로그인 필요',
        description: '로그인 시간이 만료되었습니다. 다시 로그인해 주세요.',
        buttonLabel: '확인',
        onClickButton: () => navigate('/login'),
      });
    } else if (data.images == undefined || data.images.length < 3) {
      open({
        title: '작품 등록 오류',
        description: '최소 3개의 작품을 등록해주세요.',
        buttonLabel: '확인',
      });
    } else {
      open({
        title: '전시 등록 오류',
        description: '모든 정보를 입력해 주세요.',
        buttonLabel: '확인',
      });
    }
  };

  return { handleErrors };
};
