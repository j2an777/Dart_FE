import { alertStore } from '@/stores/alert';
import { Button, Dimmed, Icon, Text } from '..';

import * as S from './styles';

interface AlertProps {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onClickButton?: () => void;
}

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  onClickButton,
}: AlertProps) => {
  const close = alertStore((state) => state.close);

  if (!open) return;

  return (
    <Dimmed>
      <S.Container>
        <S.HeaderBox>
          <Text typography="t4">{title}</Text>
          <Icon value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        {typeof description === 'string' ? (
          <Text typography="t4">{description}</Text>
        ) : (
          <>{description}</>
        )}

        <Button bold="regular" onClick={onClickButton}>
          {buttonLabel}
        </Button>
      </S.Container>
    </Dimmed>
  );
};

export default Alert;
