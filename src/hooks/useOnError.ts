import { Alert } from '@/components';
import { CustomAxiosError } from '@/types/error';
import { AxiosError } from 'axios';
import { ComponentProps } from 'react';

type AlertModalProps = ComponentProps<typeof Alert>;
const useOnError = ({
  error,
  open,
  navigate,
}: {
  error: Error | CustomAxiosError;
  open: (form: Omit<AlertModalProps, 'open'>) => void;
  navigate: (path: string) => void;
}) => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const message = error.response?.data.message;
    switch (status) {
      case 401:
        return open({
          title: '로그인 권장 서비스',
          description: '로그인 페이지로 이동하시겠습니까?',
          onClickButton: () => navigate('/login'),
        });
      default:
        return open({
          title: `${status} 에러`,
          description: message,
        });
    }
  }
};

export default useOnError;
