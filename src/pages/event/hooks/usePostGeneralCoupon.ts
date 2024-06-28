import { postCoupon } from '@/apis/event';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const usePostGeneralCoupon = () => {
  const queryclient = useQueryClient();
  const [key, setKey] = useState<number>(0);
  return useMutation({
    mutationKey: ['generalCoupon', key],
    mutationFn: (generalCouponId: number) => postCoupon({ couponId: generalCouponId }),
    onSuccess: () => setKey((prev) => prev + 1),
    onSettled: () => {
      queryclient.invalidateQueries({ queryKey: ['coupons'] });
    },
  });
};

export default usePostGeneralCoupon;
