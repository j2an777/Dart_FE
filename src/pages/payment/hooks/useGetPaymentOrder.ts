import { getPaymentOrder } from '@/apis/payment';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetPaymentOrder = () => {
  const { galleryId, order } = useParams<{
    galleryId: string;
    order: 'ticket' | 'paidGallery';
  }>();

  // 회원정보 불러오기
  return useQuery({
    queryKey: ['payment-order', galleryId, order],
    queryFn: () => getPaymentOrder(Number(galleryId), order as 'ticket' | 'paidGallery'),
    enabled: !!galleryId && !!order,
    retry: false,
  });
};

export default useGetPaymentOrder;
