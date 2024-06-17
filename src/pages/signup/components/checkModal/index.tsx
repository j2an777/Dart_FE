import { checkModalStore } from '@/stores/modal';
import { Button, Dimmed } from '@/components';

import * as S from './styles';

interface CheckModalProps {
  open: boolean;
  title: React.ReactNode;
  content?: React.ReactNode;
}

const CheckModal = ({ open, title, content }: CheckModalProps) => {
  const close = checkModalStore((state) => state.close);

  if (!open) return;

  return (
    <Dimmed style={{ zIndex: 9 }}>
      <S.Container>
        {title}
        {content}
        <Button onClick={close}>닫기</Button>
      </S.Container>
    </Dimmed>
  );
};

export default CheckModal;
