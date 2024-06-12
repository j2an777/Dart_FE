import { useEffect } from 'react';
import { pageStore } from '@/stores/page';
import PageButtons from '../pageButtons';
import PaidList from './PaidList';
import { useStore } from 'zustand';
import useGetPayment from '../../hooks/useGetPayment';
import { PaidInfo } from '@/types/payment';
import * as S from './styles';

const PaymentMenu = () => {
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data } = useGetPayment(pageInfo.pageIndex, 6);

  useEffect(() => {
    if (data && data.pageParams) {
      setPageInfo({
        pageIndex: data.pageParams.pageIndex,
        isDone: data.pageParams.isDone,
      });
    }
  }, [data, setPageInfo]);
  const payment = data.pages;

  return (
    <S.Container>
      {payment.map((data: PaidInfo) => (
        <PaidList
          paymentId={data.paymentId}
          amount={data.amount}
          approvedAt={new Date(data.approvedAt)}
          order={data.order}
          galleryName={data.galleryName}
        />
      ))}
      <footer>
        <PageButtons />
      </footer>
    </S.Container>
  );
};

export default PaymentMenu;
