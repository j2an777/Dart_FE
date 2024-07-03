import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ticket from './Ticket';
import { Text } from '@/components';
import useGetPaymentOrder from '../../hooks/useGetPaymentOrder';
import { alertStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import * as S from './styles';

const OrderBox = () => {
  const { order } = useParams<{ order: 'ticket' | 'paidGallery' }>();
  const orderType = order === 'ticket' ? '전시 입장 티켓 구매' : '전시 생성 이용료 결제';
  const { data } = useGetPaymentOrder();
  const open = alertStore((state) => state.open);
  const navigate = useCustomNavigate();

  useEffect(() => {
    if (!data) {
      open({
        title: '결제 시간 초과',
        description: '결제 유효 시간을 초과했습니다. 다시 시도해주세요.',
        buttonLabel: '돌아가기',
        onClickButton: () => navigate('/post'),
      });
    }
  }, [data, open, navigate]);

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        주문상품
      </S.Title>
      <S.Box>
        <Text typography="t5" bold="regular">
          {orderType}
        </Text>
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
