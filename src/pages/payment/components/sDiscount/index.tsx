import * as S from './styles';

const DiscountBox = () => {
  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        할인 혜택
      </S.Title>
      <S.Box>
        <S.CouponBlock>현재 적용한 쿠폰이 없습니다.</S.CouponBlock>
        <S.Button>사용</S.Button>
      </S.Box>
    </S.Container>
  );
};

export default DiscountBox;
