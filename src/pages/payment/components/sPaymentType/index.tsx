import * as S from './styles';

const PaymentTypeBox = () => {
  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        결제 수단
      </S.Title>
      <S.Box>
        <ul>
          <li>카카오 페이</li>
          <li>네이버 페이</li>
          <li>무통장 입금</li>
        </ul>
      </S.Box>
    </S.Container>
  );
};

export default PaymentTypeBox;
