import { useParams } from 'react-router-dom';
import * as S from './styles';
import Ticket from './Ticket';
import { Text } from '@/components';
import useGetPaymentOrder from '../../hooks/useGetPaymentOrder';

const OrderBox = () => {
  const { order } = useParams<{ order: 'ticket' | 'paidGallery' }>();
  const orderType = order === 'ticket' ? '전시 입장 티켓 구매' : '전시 생성 이용료 결제';
  const { data, isError } = useGetPaymentOrder();

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        주문상품
      </S.Title>
      <S.Box>
        <Text typography="t5" bold="regular">
          {orderType}
        </Text>
        {isError && (
          <S.TicketContainer>
            <S.TicketIcon value="ticket" $active={false} />
          </S.TicketContainer>
        )}
        {data && (
          <Ticket
            title={data.title}
            thumbnail={data.thumbnail}
            nickname={data.nickname}
            profileImage={data.profileImage}
          />
        )}
      </S.Box>
    </S.Container>
  );
};

export default OrderBox;
