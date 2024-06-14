import { useQuery } from '@tanstack/react-query';
import { UserCircle } from '@/components';
import { Text } from '@/components';
import { getMemberInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';

import * as S from './style';

const Info = () => {
  // 로컬스토리지에서 닉네임 가져오기
  const { nickname } = memberStore((state) => state.auth);

  // 회원정보 불러오기
  const { data, error, isLoading } = useQuery({
    queryKey: ['mypageMemberInfo', nickname],
    queryFn: () => getMemberInfo(nickname),
    enabled: !!nickname,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading member info</div>;
  }
  if (!data) return;
  return (
    <S.Container>
      <S.Box>
        <S.Block>
          <UserCircle size={80} profileImage={data.profileImage} />
        </S.Block>
        <S.Block>
          <Text typography="t5" bold="bold">
            {data.nickname}
          </Text>
          <Text typography="t6" bold="regular">
            {data.email}
          </Text>
        </S.Block>
      </S.Box>
      <S.TextIntro typography="t6" bold="regular">
        {data.introduce}
      </S.TextIntro>
    </S.Container>
  );
};

export default Info;
