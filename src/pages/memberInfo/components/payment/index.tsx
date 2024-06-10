import PaidList from './PaidList';
import * as S from './styles';

const Payment = () => {
  return (
    <S.Container>
      <PaidList
        paymentId={90}
        amount={4000}
        approvedAt={new Date()}
        order={'ticket'}
        galleryName={'전시이름'}
      />
    </S.Container>
  );
};

export default Payment;
