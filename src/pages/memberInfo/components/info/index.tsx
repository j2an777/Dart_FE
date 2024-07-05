import { useQuery } from '@tanstack/react-query';
import { NoneData } from '@/components';
import { Text } from '@/components';
import { getMemberInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';
import { useParams } from 'react-router-dom';
import * as S from './styles';

const Info = () => {
  // 타인 정보 조회
  const { memberId } = useParams<{ memberId: string }>();
  // 본인 정보 조회
  const authNickname = memberStore((state) => state.auth.nickname);
  const nickname = memberId ?? authNickname;

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
      {!error && data && (
        <>
          <S.Box>
            <S.Block>
              <S.StyledUserCircle size={150} profileImage={data.profileImage} />
              <section>
                <Text typography="t5" bold="bold">
                  {data.nickname}
                </Text>
                <Text typography="t6" bold="regular">
                  {data.email}
                </Text>
              </section>
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
