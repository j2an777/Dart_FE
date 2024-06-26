import instance from './instance';
import { OrderInfo, PaymentRequest } from '@/types/payment';

export const postPayment = async ({
  galleryId,
  order,
  couponId,
  isPriority,
}: PaymentRequest) => {
  const response = await instance.post(`/payment`, {
    galleryId,
    order,
    couponId,
    isPriority,
  });
  return response?.data;
};

// 결제 내역 조회
export const getPayment = async (page: number, size: number) => {
  const response = await instance.get('/payment', {
    params: {
      page,
      size,
    },
  });
  return response?.data;
};

// 주문 결제 조회
export const getPaymentOrder = async (
  galleryId: number,
  order: 'ticket' | 'paidGallery',
) => {
  const response = await instance.get(`/payment/${galleryId}`, {
    params: {
      order,
    },
  });
  return response?.data as OrderInfo;
};
