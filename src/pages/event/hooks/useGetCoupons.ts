import { getCoupons } from '@/apis/event';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetCoupons = () => {
  return useSuspenseQuery({ queryKey: ['coupons'], queryFn: () => getCoupons() });
};

export default useGetCoupons;
