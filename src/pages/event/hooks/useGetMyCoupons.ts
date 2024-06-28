import { getMyCoupons } from '@/apis/event';
import { useQuery } from '@tanstack/react-query';

// const initialData = [
//   {
//     title: '',
//     couponType: 0,
//     couponId: 0,
//     isProirity: false,
//   },
// ];

const useGetMyCoupons = (enabled: boolean) => {
  return useQuery({
    queryKey: ['myCoupon'],
    queryFn: () => getMyCoupons(),
    placeholderData: { myCoupons: [] },
    enabled,
  });
};

export default useGetMyCoupons;
