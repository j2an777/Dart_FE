import { getMemberInfo } from '@/apis/member';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfo = (nickname?: string) => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery({
    queryKey: ['member', nickname],
    queryFn: () => getMemberInfo(nickname),
    enabled: !!accessToken,
  });
};

export default useGetUserInfo;
