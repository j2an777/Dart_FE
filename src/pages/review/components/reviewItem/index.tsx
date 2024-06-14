import { NicknameNProfile, StarRate, Text } from '@/components';
import parseDate from '@/utils/parseDate';
import { Review } from '@/types/review';

import * as S from './styles';

const ReviewItem = ({
  content,
  createdAt,
  nickname,
  profileImage,
  score,
}: Omit<Review, 'reviewId'>) => {
  return (
    <S.Container>
      <NicknameNProfile
        nickname={nickname}
        profileImage={profileImage}
        profileSize={25}
        typography="t6"
        bold="regular"
        ellipsis={80}
      />
      <StarRate rate={score} />
      <S.ContentText typography="t6" bold="regular">
        {content}
      </S.ContentText>
      <Text color="gray400" typography="t6" bold="regular">
        {parseDate(createdAt)}
      </Text>
    </S.Container>
  );
};

export default ReviewItem;
