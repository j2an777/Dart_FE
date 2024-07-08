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
  generatedCost: number;
  hashTags: string[];
  template: 'one' | 'two' | 'three' | 'four' | 'five';
  informations: Info[];
  address: string | null;
}

export interface PostGalleries {
  gallery: Gallery;
  thumbnail: File;
  images: File[];
}

export interface PostReview {
  galleryId: number;
  content?: string;
  score: number;
}
