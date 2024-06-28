import { postPayment } from '@/apis/payment';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { useMutation } from '@tanstack/react-query';
import { PaymentRequest } from '@/types/payment';

const usePostPayment = () => {
  const navigate = useCustomNavigate();
  return useMutation({
    mutationFn: (formData: PaymentRequest) => postPayment(formData),
    onSuccess: (data) => {
      navigate(data.next_redirect_pc_url);
    },
  });
};

export default usePostPayment;
