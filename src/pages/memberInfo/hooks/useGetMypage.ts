import { getMypage } from '@/apis/member';
import { useQuery } from '@tanstack/react-query';

const useGetMypage = (nickname: string, page: number, size: number = 2) => {
  return useQuery({
    queryKey: ['exhibitions', [nickname, page, size]],
    queryFn: () => getMypage(nickname, page, size),
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetMypage;
