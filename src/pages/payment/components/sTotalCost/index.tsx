import * as S from './styles';
import { useParams } from 'react-router-dom';
import { postPayment } from '@/apis/payment';
import { Text } from '@/components';
import useGetPaymentOrder from '../../hooks/useGetPaymentOrder';

const TotalCostBox = () => {
  const { galleryId, order } = useParams<{
    galleryId: string;
    order: 'ticket' | 'paidGallery';
  }>();
  const { data } = useGetPaymentOrder();
  // 원가
  const originalCost = data?.cost || 0;
  // 할인 퍼센트
  const sale = 10;
  // 할인 금액 계산
  const discountAmount = originalCost * (sale / 100);
  // 최종 결제 금액 계산
  const totalCost = originalCost - discountAmount;

  // 결제 승인 요청
  const paidGallery = async () => {
    const payment = await postPayment({
      galleryId: Number(galleryId),
      order: order as 'ticket' | 'paidGallery',
      couponId: 0,
      isPriority: false,
    });
    window.location.href = payment.next_redirect_pc_url;
  };

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        결제 상세
      </S.Title>
      <S.Box>
        <S.Block>
          <>상품금액</>
          <p>{originalCost}원</p>
        </S.Block>
        <S.Block>
          <>할인금액</>
          <span>- {discountAmount}원</span>
        </S.Block>
        <S.Total>
          최종 결제금액
          <Text typography="t4">{totalCost}원</Text>
        </S.Total>
        <S.Button onClick={paidGallery}>결제하기</S.Button>
      </S.Box>
    </S.Container>
  );
};

export default TotalCostBox;
