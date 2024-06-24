import { useEffect } from 'react';
import { pageStore } from '@/stores/page';
import PaidList from './PaidList';
import { useStore } from 'zustand';
import useGetPayment from '../../hooks/useGetPayment';
import { PaidInfo } from '@/types/payment';
import * as S from './styles';
import { PageButtons, withSuspenseNErrorBoundary } from '@/components';

const Purchase = () => {
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data, isLoading, error } = useGetPayment(pageInfo.pageIndex, 6);

  useEffect(() => {
    if (data && data.pageParams) {
      setPageInfo({
        pageIndex: data.pageParams.pageIndex,
        isDone: data.pageParams.isDone,
      });
    }
  }, [data, setPageInfo]);

  return (
    <S.Container>
      {!error &&
        !isLoading &&
        data.pages.map((data: PaidInfo) => (
          <PaidList
            key={data.paymentId}
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

const PurchaseWithSuspense = withSuspenseNErrorBoundary(Purchase, {
  suspenseFallback: (
    <S.Loading typography="t4" color="gray400">
      loading...
    </S.Loading>
  ),
});

export default PurchaseWithSuspense;
