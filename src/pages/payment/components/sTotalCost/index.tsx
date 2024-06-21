import * as S from './styles';
import { useParams } from 'react-router-dom';
import { postPayment } from '@/apis/payment';
import { Text } from '@/components';

const TotalCostBox = () => {
  const { galleryId, order } = useParams<{
    galleryId: string;
    order: 'ticket' | 'paidGallery';
  }>();

  // 결제 승인 요청
  const paidGallery = async () => {
    const payment = await postPayment(
      Number(galleryId),
      order as 'ticket' | 'paidGallery',
    );
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
          <p>20000원</p>
        </S.Block>
        <S.Block>
          <>할인금액</>
          <span>- 2000원</span>
        </S.Block>
        <S.Total>
          최종 결제금액
          <Text typography="t4">18000원</Text>
        </S.Total>
        <S.Button onClick={paidGallery}>결제하기</S.Button>
      </S.Box>
    </S.Container>
  );
};

export default TotalCostBox;
