import { ReviewInfo, ReviewList } from './components';

import * as S from './styles';

const ReviewPage = () => {
  return (
    <S.Container>
      <ReviewInfo />
      <ReviewList />
    </S.Container>
  );
};

export default ReviewPage;
