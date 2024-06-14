import { ReviewItem } from '..';
import { useStore } from 'zustand';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import useGetReviews from '../../hooks/useGetReviews';
import { useParams } from 'react-router-dom';

import * as S from './styles';

const ReviewList = () => {
  const { galleryId } = useParams();
  const {
    pageInfo: { pageIndex },
    setPageInfo,
    resetPageInfo,
  } = useStore(pageStore);
  const {
    data: { pageParams, pages },
  } = useGetReviews({ galleryId: galleryId as string, pageIndex });

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

export default ReviewList;
