import { Text } from '@/components';
import useGetPaymentOrder from '../../hooks/useGetPaymentOrder';
import * as S from './styles';

const TotalCostBox = () => {
  const { data } = useGetPaymentOrder();

  // 원가
  const originalCost = data?.cost || 0;
  // 할인 퍼센트
  const sale = 10;
  // 할인 금액 계산
  const discountAmount = Math.floor(originalCost * (sale / 100));
  // 최종 결제 금액 계산
  const totalCost = originalCost - discountAmount;

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
        <S.Button type="submit">결제하기</S.Button>
      </S.Box>
    </S.Container>
  );
};

export default TotalCostBox;
