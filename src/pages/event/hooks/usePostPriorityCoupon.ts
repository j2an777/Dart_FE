import { postCoupon } from '@/apis/event';
import { useMutation } from '@tanstack/react-query';

const usePostPriorityCoupon = (priorityCouponId: number) => {
  return useMutation({
    mutationKey: ['priorityCoupon', priorityCouponId],
    mutationFn: () => postCoupon({ couponId: priorityCouponId, isPriority: true }),
    onSuccess: () => {},
    onError: () => {}
  });
};

export default usePostPriorityCoupon;
