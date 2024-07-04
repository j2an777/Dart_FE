import { useEffect } from 'react';
import { Button, Dimmed, Icon, Text } from '..';
import useDisabledScroll from '@/hooks/useDisabledScroll';

import * as S from './styles';

interface AlertProps {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  buttonCancelLabel?: string;
  onClickButton?: () => void;
  onClickCancelButton?: () => void;
  close: () => void;
}

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  buttonCancelLabel,
  onClickButton,
  onClickCancelButton,
  close,
}: AlertProps) => {
  const { lockScroll, openScroll } = useDisabledScroll();

  useEffect(() => {
    lockScroll();
    return () => openScroll();
  }, []);

  if (!open) return null;

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

        <S.ButtonBox>
          {buttonLabel && onClickCancelButton && (
            <Button bold="regular" size="smMd" onClick={onClickCancelButton} buttonType='reverseCancelRadius'>
              {buttonCancelLabel}
            </Button> 
          )}  
          <Button bold="bold" size="smMd" onClick={onClickButton}>
            {buttonLabel}
          </Button>
        </S.ButtonBox>
        
      </S.Container>
    </Dimmed>
  );
};

export default Alert;
