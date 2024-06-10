export interface Info {
  imageTitle: string;
  description: string;
}

export interface Gallery {
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  fee: number;
  hashTags: string[];
  information: Info[];
}

export interface PostGalleries {
  gallery: Gallery;
  thumbnail: File;
  images: File[];
}
