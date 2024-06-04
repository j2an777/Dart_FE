export interface Gallery {
  galleryId: number;
  thumbnail: string;
  title: string;
  startDate: Date;
  endDate: Date;
  fee: number;
  hashtags: string[];
}

export interface PageInfo {
  pageIndex: number;
  isDone: boolean;
}

export interface GalleriesData {
  pages: Gallery[];
  pageInfo: PageInfo;
}

export interface GalleryDesc extends Gallery {
  nickname: string;
  profileImage: string;
  reviewAverage: number;
  hasTicket: boolean;
}

export interface GalleryParams {
  keyword: string;
  category: 'hashtag' | 'author' | 'title';
  sort: 'latest' | 'hot' | 'liked';
  cost: 'all' | 'free' | 'pay';
  display: 'all' | 'upcomming' | 'inprogress' | 'finished';
}
