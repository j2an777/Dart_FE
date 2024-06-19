import { useParams } from 'react-router-dom';
import * as S from './styles';

const OrderBox = () => {
  const { order } = useParams();
  const orderType = order === 'ticket' ? '전시 입장' : '전시 생성';

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        주문상품
      </S.Title>
      <S.Box>
        <S.Order typography="t5" bold="regular">
          {orderType}
        </S.Order>
        <S.Ticket></S.Ticket>
      </S.Box>
    </S.Container>
  );
};

export default OrderBox;
