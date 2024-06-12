import { getGalleries } from '@/apis/gallery';
import { filterStore } from '@/stores/filter';
import { pageStore } from '@/stores/page';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetGalleries = () => {
  const { pageIndex } = pageStore((state) => state.pageInfo);
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
