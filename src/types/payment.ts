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
