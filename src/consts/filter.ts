import { CategoryValues, CostValues, DispalyValues, SortValues } from '@/types/gallery';

export interface BaseButtonInfo {
  label: string;
}

export interface SearchInfoType extends BaseButtonInfo {
  value: CategoryValues;
}

export interface DisplayInfoType extends BaseButtonInfo {
  value: DispalyValues;
}

export interface SortInfoType extends BaseButtonInfo {
  value: SortValues;
}

export interface CostInfoType extends BaseButtonInfo {
  value: CostValues;
}

export const searchButtonInfo: SearchInfoType[] = [
  {
    value: 'title',
    label: '제목',
  },
  {
    value: 'author',
    label: '작가',
  },
  {
    value: 'hashtag',
    label: '해시태그',
  },
];

export const displayButtonInfo: DisplayInfoType[] = [
  {
    value: 'upcomming',
    label: '전시예정',
  },
  {
    value: 'inprogress',
    label: '전시중',
  },
  {
    value: 'finished',
    label: '전시종료',
  },
];

export const sortButtonInfo: SortInfoType[] = [
  {
    value: 'latest',
    label: '최신순',
  },
  {
    value: 'hot',
    label: '인기순',
  },
  {
    value: 'liked',
    label: '별점순',
  },
];

export const costButtonInfo: CostInfoType[] = [
  {
    value: 'free',
    label: 'FREE',
  },
  {
    value: 'pay',
    label: 'PAY',
  },
];
