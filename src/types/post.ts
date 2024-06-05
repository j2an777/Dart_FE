export interface Item {
  image: File;
  imageTitle: string;
  description: string;
}

export interface PostGalleries {
  thumbnail: File;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  images: Item[];
  fee: number;
  hashTags: string[];
}
