import { alertStore } from '@/stores/alert';
import * as S from './styles';
import { Button, Dimmed, Icon, Text } from '..';
import { ReactNode } from 'react';

interface AlertProps {
  open: boolean;
  title: ReactNode;
  description?: ReactNode;
  buttonLabel?: string;
}

const Alert = ({ open, title, description, buttonLabel = '확인' }: AlertProps) => {
  const openAlert = alertStore((state) => state.openAlert);
  if (!open) return;
  return (
    <Dimmed>
      <S.Container>
        <S.HeaderBox>
          <Text typography="t4">{title}</Text>
          <Icon value="cancel" size={15} onClick={openAlert} />
        </S.HeaderBox>
        <Text typography="t4">{description}</Text>
        <Button>{buttonLabel}</Button>
      </S.Container>
    </Dimmed>
  );
};

export default Alert;
