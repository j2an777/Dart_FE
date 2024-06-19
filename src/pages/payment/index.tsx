import { DiscountBox, OrderBox, PaymentTypeBox, TotalCostBox } from './components';
import * as S from './styles';

const PaymentPage = () => {
  return (
    <S.Container>
      <S.LeftBox>
        <OrderBox />
        <DiscountBox />
        <PaymentTypeBox />
      </S.LeftBox>
      <S.RightBox>
        <TotalCostBox />
      </S.RightBox>
    </S.Container>
  );
};

export default PaymentPage;
