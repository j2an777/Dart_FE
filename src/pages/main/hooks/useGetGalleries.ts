import { getGalleries } from '@/apis/gallery';
import { filterStore } from '@/stores/filter';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetGalleries = (pageIndex: number) => {
  const filterValue = filterStore((state) => state.filterValue);
  const size = 6;
  return useSuspenseQuery({
    queryKey: ['galleries', [pageIndex, ...Object.values(filterValue)]],
    queryFn: () => getGalleries({ page: pageIndex, size, ...filterValue }),
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetGalleries;
