import { ReviewItem } from '..';
import { useStore } from 'zustand';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import useGetReviews from '../../hooks/useGetReviews';

import * as S from './styles';
import { useParams } from 'react-router-dom';
import withSuspense from '@/hooks/withSuspense';

const ReviewList = () => {
  const { galleryId } = useParams();
  const {
    data: { pageParams, pages },
  } = useGetReviews(galleryId as string);
  const { setPageInfo, resetPageInfo } = useStore(pageStore);

  useLayoutEffect(() => {
    setPageInfo(pageParams);
    return () => resetPageInfo();
  }, [pageParams, resetPageInfo, setPageInfo]);

  return (
    <S.Container>
      {pages.map(({ reviewId, ...review }) => (
        <ReviewItem key={reviewId} {...review} />
      ))}
    </S.Container>
  );
};

export default withSuspense(ReviewList, { fallback: <>로딩중</> });
