import { FilterType } from '@/types/gallery';
import instance from './instance';

export const getSearchData = async ({
  keyword,
  category,
}: Pick<FilterType, 'category' | 'keyword'>) => {
  const response = await instance.get(
    `api/search?keyword=${keyword}&category=${category}`,
  );
  return response?.data as string[];
};
