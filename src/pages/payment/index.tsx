import { FormProvider, useForm } from 'react-hook-form';
import { DiscountBox, OrderBox, PaymentTypeBox, TotalCostBox } from './components';
import usePostPayment from './hooks/usePostPayment';
import { PaymentRequest } from '@/types/payment';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PaymentPage = () => {
  const methods = useForm<PaymentRequest>();
  const { handleSubmit, setValue } = methods;
  const { mutate: payment } = usePostPayment();
  const { galleryId, order } = useParams<{
    galleryId: string;
    order: 'ticket' | 'paidGallery';
  }>();

  const onSubmit = async (formData: PaymentRequest) => {
    payment(formData);
  };
  useEffect(() => {
    setValue('galleryId', Number(galleryId));
    setValue('order', order as 'ticket' | 'paidGallery');
  }, []);
  return (
    <S.Container>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.LeftBox>
            <OrderBox />
            <DiscountBox />
            <PaymentTypeBox />
          </S.LeftBox>
          <S.RightBox>
            <TotalCostBox />
          </S.RightBox>
        </form>
      </FormProvider>
    </S.Container>
  );
};

export default PaymentPage;
