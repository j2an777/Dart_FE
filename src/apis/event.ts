import { Coupons, MyCoupons } from '@/types/coupon';
import instance from './instance';

export const getCoupons = async () => {
  const response = await instance.get('/events');
  return response.data as Coupons;
};

export const postCoupon = async ({
  couponId,
  isPriority = false,
}: {
  couponId: number;
  isPriority?: boolean;
}) => {
  const path = isPriority ? 'priority-coupon' : 'general-coupon';
  const data = isPriority
    ? { priorityCouponId: couponId }
    : { generalCouponId: couponId };
  const response = await instance.post(`/events/${path}`, data);
  return response.data;
};

export const getMyCoupons = async () => {
  const response = await instance.get('/events/my-coupon');
  return response.data as MyCoupons;
};
