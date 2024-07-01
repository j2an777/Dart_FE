import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { DiscountBox, OrderBox, PaymentTypeBox, TotalCostBox } from './components';
import usePostPayment from './hooks/usePostPayment';
import { PaymentRequest } from '@/types/payment';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export interface PaymentValue extends PaymentRequest {
  title: string;
  couponType: number;
}

const PaymentPage = () => {
  const methods = useForm<PaymentValue>();
  const { handleSubmit, setValue } = methods;
  const { mutate: payment } = usePostPayment();
  const { galleryId, order } = useParams<{
    galleryId: string;
    order: 'ticket' | 'paidGallery';
  }>();

  useEffect(() => {
    setValue('galleryId', Number(galleryId));
    setValue('order', order as 'ticket' | 'paidGallery');
  }, []);

  const onSubmit: SubmitHandler<PaymentValue> = async (formData) => {
    const { title, couponType, ...restFormData } = formData;
    console.log(title, couponType);
    payment(restFormData);
  };

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.LeftBox>
          <OrderBox />
          <DiscountBox />
          <PaymentTypeBox />
        </S.LeftBox>
        <S.RightBox>
          <TotalCostBox />
        </S.RightBox>
      </S.Container>
    </FormProvider>
  );
};

export default PaymentPage;
