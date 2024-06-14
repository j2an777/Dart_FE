import { getSearchData } from '@/apis/search';
import { FilterType } from '@/types/gallery';
import { useQuery } from '@tanstack/react-query';

const useGetSearchDatas = ({
  keyword,
  category,
}: Pick<FilterType, 'category' | 'keyword'>) => {
  return useQuery({
    queryKey: ['search', [keyword, category]],
    queryFn: async () => await getSearchData({ keyword, category }),
    enabled: !!keyword,
  });
};

export default useGetSearchDatas;
