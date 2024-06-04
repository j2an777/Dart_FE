import { getGalleries } from '@/apis/gallery';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetGalleries = () => {
  const page = 0;
  return useSuspenseQuery({
    queryKey: ['galleries', page],
    queryFn: () => getGalleries({}),
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetGalleries;
