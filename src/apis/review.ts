import { PostReview } from '@/types/post';
import instance from './instance';
import { ReviewInfo, ReviewsData } from '@/types/review';

export const postReview = async (reviewData: PostReview) => {
  const response = await instance.post(`/reviews`, reviewData);
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
  const response = await instance.get(`/reviews/${galleryId}`, {
    params: {
      page,
      size,
    },
  });
  return response?.data as ReviewsData;
};

export const getReveiwsInfo = async (galleryId: string) => {
  const response = await instance.get(`/reviews/info?gallery-id=${galleryId}`);
  return response.data as ReviewInfo;
};
