import { Text } from '@/components';
import * as S from './styles';
import { useState } from 'react';

const PaymentTypeBox = () => {
  const [selectedBtn, setSelectedBtn] = useState<boolean>(true);
  const onBtnClick = () => {
    setSelectedBtn((prevSelected) => !prevSelected);
  };

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        결제 수단
      </S.Title>
      <S.Box>
        <S.Block>
          <S.CheckBtn onClick={onBtnClick}>{selectedBtn && <S.Checked />}</S.CheckBtn>
          <Text typography="t5" bold="regular">
            카카오 페이
          </Text>
        </S.Block>
        <S.Block>
          <S.CheckBtn disabled />
          <Text typography="t5" bold="regular" color="gray400">
            네이버 페이
          </Text>
        </S.Block>
        <S.Block>
          <S.CheckBtn disabled />
          <Text typography="t5" bold="regular" color="gray400">
            무통장 입금
          </Text>
        </S.Block>
      </S.Box>
    </S.Container>
  );
};

export default PaymentTypeBox;
