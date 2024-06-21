import { useParams } from 'react-router-dom';
import * as S from './styles';
import Ticket from './Ticket';
import { Text } from '@/components';

const OrderBox = () => {
  const { order } = useParams();
  const orderType = order === 'ticket' ? '전시 입장 티켓 구매' : '전시 생성 이용료 결제';

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        주문상품
      </S.Title>
      <S.Box>
        <Text typography="t5" bold="regular">
          {orderType}
        </Text>
        <Ticket
          title="전시 제목"
          thumbnail="t.png"
          nickname="닉네임 입니다."
          profileImage="me.png"
        />
      </S.Box>
    </S.Container>
  );
};

export default OrderBox;
