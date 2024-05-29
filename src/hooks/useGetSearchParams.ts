import { useSearchParams } from 'react-router-dom';

const useGetSearchParams = (query: string) => {
  const [searchParams] = useSearchParams();

  return searchParams.get(query);
};

export default useGetSearchParams;
