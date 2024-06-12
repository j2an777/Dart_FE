import { getMypage } from '@/apis/member';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetMypage = (nickname: string, page: number, size: number = 2) => {
  return useSuspenseQuery({
    queryKey: ['exhibitions', nickname, page, size],
    queryFn: () => getMypage(nickname, page, size),
    initialData: { pageInfo: { isDone: true, pageIndex: 0 }, pages: [] },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetMypage;
