import { getPayment } from '@/apis/payment';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetPayment = (page: number, size: number) => {
  return useSuspenseQuery({
    queryKey: ['payment', page, size],
    queryFn: () => getPayment(page, size),
    initialData: { pageInfo: { isDone: true, pageIndex: 0 }, pages: [] },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
  });
};

export default useGetPayment;
