import { PageInfo } from './gallery';

export interface PaidInfo {
  paymentId: number;
  amount: number;
  approvedAt: Date;
  order: 'ticket' | 'paidGallery';
  galleryName: string;
}

export interface Payment {
  pages: PaidInfo[];
  pageInfo: PageInfo;
}

export interface OrderInfo {
  title: string;
  thumbnail: string;
  nickname: string;
  profileImage: string;
  cost: number;
}

export interface PaymentRequest {
  galleryId: number;
  order: 'ticket' | 'paidGallery';
  couponId: number;
  isPriority: boolean;
}
