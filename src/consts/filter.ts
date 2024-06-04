interface ButtonInfoValue {
  value: string;
  label: string;
}

export const searchButtonInfo: ButtonInfoValue[] = [
  {
    value: 'author',
    label: '작가',
  },
  {
    value: 'title',
    label: '제목',
  },
  {
    value: 'hashtag',
    label: '해시태그',
  },
];

export const priceButtonInfo: ButtonInfoValue[] = [
  {
    value: 'pay',
    label: 'PAY',
  },
  {
    value: 'free',
    label: 'FREE',
  },
];
