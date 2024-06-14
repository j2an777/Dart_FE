import { PageInfo } from './gallery';

export interface ReviewsData {
  pages: Review[];
  pageInfo: PageInfo;
}

export interface Review {
  reviewId: number;
  createdAt: Date;
  content: string;
  score: number;
  nickname: string;
  profileImage: string | null;
}
