import { PaidInfo } from '@/types/payment';
import Text from '@/components/Text';
import parseDate from '@/utils/parseDate';
import parseTime from '@/utils/parseTime';
import * as S from './styles';

const PaidList = ({ paymentId, amount, approvedAt, order, galleryName }: PaidInfo) => {
  const getOrderLabel = (order: 'ticket' | 'paidGallery') => {
    if (order === 'ticket') return '전시 구매';
    if (order === 'paidGallery') return '전시 생성';
    return order;
  };

  return (
    <S.ListContainer>
      <S.ListBox>
        <section>
          <Text typography="t5" bold="regular">
            {parseDate(approvedAt)}
          </Text>
          <Text typography="t5" bold="bold">
            {galleryName}
          </Text>
        </section>
        <Text typography="t5" bold="bold">
          {amount}원
        </Text>
      </S.ListBox>
      <S.ListBox>
        <S.ListBlock>
          <Text typography="t5" bold="regular">
            {parseTime(approvedAt)} | {getOrderLabel(order)}
          </Text>
          <Text typography="t5" bold="regular">
            결제 확인 번호: {paymentId}
          </Text>
        </S.ListBlock>
      </S.ListBox>
    </S.ListContainer>
  );
};

export default PaidList;
