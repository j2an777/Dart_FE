import { UserCircle } from '@/components';
import { Text } from '@/components';
import * as S from './style';

const Info = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Block>
          <UserCircle size={80} />
        </S.Block>
        <S.Block>
          <Text typography="t5" bold="bold">
            {/* {data?.nickname} */}
          </Text>
          <Text typography="t6" bold="regular">
            {/* {data?.email} */} email
          </Text>
        </S.Block>
      </S.Box>
      <S.TextIntro typography="t6" bold="regular">
        {/* {data?.introduce} */}
        소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글
      </S.TextIntro>
    </S.Container>
  );
};

export default Info;
