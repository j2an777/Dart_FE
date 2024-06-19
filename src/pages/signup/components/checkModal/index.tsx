import { checkModalStore } from '@/stores/modal';
import { Button, Dimmed, Text } from '@/components';

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
        <Text color="white" typography="t3">
          {title}
        </Text>
        {content}
        <Button onClick={close}>닫기</Button>
      </S.Container>
    </Dimmed>
  );
};

export default CheckModal;
