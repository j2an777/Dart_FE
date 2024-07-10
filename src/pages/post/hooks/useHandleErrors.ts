import { alertStore } from '@/stores/modal';
import axios from 'axios';

export const useHandleErrors = () => {
  const open = alertStore((state) => state.open);

  const handleErrors = (error: unknown) => {
    let message;

    if (axios.isAxiosError(error)) {
      message = error.response?.data.message || message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    open({
      title: '작품 등록 오류',
      description: message,
      buttonLabel: '확인',
      onClickButton: () => {},
    });
  };

  return { handleErrors };
};
