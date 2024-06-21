import { useQuery } from '@tanstack/react-query';
import { NoneData, UserCircle } from '@/components';
import { Text } from '@/components';
import { getMemberInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';

import * as S from './style';

const Info = () => {
  const { nickname } = memberStore((state) => state.auth);

  // 회원정보 불러오기
  const { data, error, isLoading } = useQuery({
    queryKey: ['mypageMemberInfo', nickname],
    queryFn: () => getMemberInfo(nickname),
    enabled: !!nickname,
  });

  return (
    <S.Container>
      {isLoading && <NoneData content="loading..." />}
      {error && <NoneData content="정보를 불러오는데 실패했습니다." />}
      {data && (
        <>
          <S.Box>
            <S.Block>
              <UserCircle size={150} profileImage={data.profileImage} />
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
        </>
      )}
    </S.Container>
  );
};

export default Info;
