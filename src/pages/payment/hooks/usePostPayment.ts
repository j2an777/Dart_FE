import { postPayment } from '@/apis/payment';
import { useMutation } from '@tanstack/react-query';
import { PaymentRequest } from '@/types/payment';

const usePostPayment = () => {
  return useMutation({
    mutationFn: (formData: PaymentRequest) => postPayment(formData),
    onSuccess: (data) => {
      window.location.assign(data.next_redirect_pc_url);
    },
  });
};

export default usePostPayment;
