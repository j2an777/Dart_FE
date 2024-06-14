import { getReveiws } from '@/apis/review';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetReviews = ({
  galleryId,
  pageIndex,
}: {
  galleryId: string;
  pageIndex: number;
}) => {
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
