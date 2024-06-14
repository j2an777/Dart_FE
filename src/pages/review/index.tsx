import { PageButtons } from '@/components';
import { ReviewInfo, ReviewList } from './components';

import * as S from './styles';

const ReviewPage = () => {
  return (
    <S.Container>
      <ReviewInfo />
      <ReviewList />
      <PageButtons />
    </S.Container>
  );
};

export default ReviewPage;
