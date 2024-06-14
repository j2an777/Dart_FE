import { getGalleries } from '@/apis/gallery';
import { filterStore } from '@/stores/filter';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetGalleries = (pageIndex: number) => {
  const filterValue = filterStore((state) => state.filterValue);

  return useSuspenseQuery({
    queryKey: ['galleries', [pageIndex, ...Object.values(filterValue)]],
    queryFn: () => getGalleries({ ...filterValue, pageIndex }),
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetGalleries;
