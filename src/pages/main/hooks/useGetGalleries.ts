import { getGalleries } from '@/apis/gallery';
import { filterStore } from '@/stores/filter';
import { pageStore } from '@/stores/page';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';

const useGetGalleries = () => {
  const filterValue = filterStore((state) => state.filterValue);
  const {
    pageInfo: { pageIndex },
  } = useStore(pageStore);
  const size = 6;

  return useSuspenseQuery({
    queryKey: ['galleries', [pageIndex, ...Object.values(filterValue)]],
    queryFn: () => getGalleries({ page: pageIndex, size, ...filterValue }),
    select: (data) => {
      return {
        pages: data.pages,
        pageParams: data.pageInfo,
      };
    },
  });
};

export default useGetGalleries;
