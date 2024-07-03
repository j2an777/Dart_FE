import { useEffect } from 'react';
import { Button, Dimmed, Icon, Text } from '..';
import useDisabledScroll from '@/hooks/useDisabledScroll';

import * as S from './styles';

interface AlertProps {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onClickButton?: () => void;
  close: () => void;
}

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  onClickButton,
  close,
}: AlertProps) => {
  const { lockScroll, openScroll } = useDisabledScroll();

  useEffect(() => {
    lockScroll();
    return () => openScroll();
  }, []);

  if (!open) return;

  return (
    <Dimmed style={{ zIndex: 12 }}>
      <S.Container>
        <S.HeaderBox>
          <Text typography="t4">{title}</Text>
          <Icon value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        {typeof description === 'string' ? (
          <Text typography="t5" bold="regular" className="dsBox">
            {description}
          </Text>
        ) : (
          <>{description}</>
        )}

        <Button bold="bold" size="smMd" onClick={onClickButton}>
          {buttonLabel}
        </Button>
      </S.Container>
    </Dimmed>
  );
};

export default Alert;
