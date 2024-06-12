import { getMemberInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfo = (nickname?: string) => {
  const accessToken = memberStore((state) => state.accessToken);

  return useQuery({
    queryKey: ['member', nickname],
    queryFn: () => getMemberInfo(nickname),
    enabled: !!accessToken,
  });
};

export default useGetUserInfo;
