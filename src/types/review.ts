import { GalleryDesc, PageInfo } from './gallery';

export interface ReviewsData {
  pages: Review[];
  pageInfo: PageInfo;
}

export interface Review {
  reviewId: number;
  createAt: Date;
  content: string;
  score: number;
  nickname: string;
  profileImage: string | null;
}

export type ReviewInfo = Pick<
  GalleryDesc,
  | 'nickname'
  | 'thumbnail'
  | 'reviewAverage'
  | 'endDate'
  | 'startDate'
  | 'profileImage'
  | 'title'
>;
