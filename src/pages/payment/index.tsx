import { FormProvider, useForm } from 'react-hook-form';
import { DiscountBox, OrderBox, PaymentTypeBox, TotalCostBox } from './components';
import usePostPayment from './hooks/usePostPayment';
import { PaymentRequest } from '@/types/payment';
import * as S from './styles';

const PaymentPage = () => {
  const methods = useForm<PaymentRequest>();
  const { handleSubmit } = methods;
  const { mutate: payment } = usePostPayment();

  const onSubmit = async (formData: PaymentRequest) => {
    payment(formData);
  };

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
