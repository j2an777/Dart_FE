import { getReveiws } from '@/apis/review';
import { pageStore } from '@/stores/page';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetReviews = (galleryId: string) => {
  const { pageIndex } = pageStore((state) => state.pageInfo);

  return useSuspenseQuery({
    queryKey: ['reviews', pageIndex],
    queryFn: () => getReveiws({ galleryId, page: pageIndex, size: 10 }),
    initialData: { pageInfo: { isDone: true, pageIndex: 0 }, pages: [] },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetReviews;
