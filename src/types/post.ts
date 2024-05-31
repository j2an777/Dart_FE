export interface Post {
  thumbnail: File;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  image: File;
  description: string;
  imageTitle: string;
  cost: 'free' | 'pay';
  fee: number;
  hashTags: string[];
}
