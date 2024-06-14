import { PostReview } from '@/types/post';
import instance from './instance';
import { ReviewsData } from '@/types/review';

export const postReview = async (reviewData: PostReview) => {
  const response = await instance.post(`/api/reviews`, reviewData);
  if (response.status === 200) {
    console.log('성공');
  } else {
    console.log('실패');
  }
};

interface ReviewParams {
  galleryId: string;
  page: number;
  size: number;
}
export const getReveiws = async (getReviewParams: ReviewParams) => {
  const { galleryId, page, size } = getReviewParams;
  const response = await instance.get(`/api/reviews/${galleryId}`, {
    params: {
      page,
      size,
    },
  });
  return response?.data as ReviewsData;
};
