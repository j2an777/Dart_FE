import instance from './instance';
import { FilterType, GalleriesData } from '@/types/gallery';
import { PostGalleries, PostReview } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const { thumbnail, images, gallery } = formData;
  const data = new FormData();

  if (thumbnail) {
    data.append('thumbnail', thumbnail);
  }

  images.forEach((image: File, index: number) => {
    data.append(`images[${index}]`, image);
  });

  data.append(
    'gallery',
    new Blob([JSON.stringify(gallery)], { type: 'application/json' }),
  );

  const response = await instance.post('/api/galleries', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response?.data;
};

interface GetGalleriesParams extends Partial<FilterType> {
  page?: number;
  size?: number;
}

export const getGalleries = async ({ page = 0, size = 6 }: GetGalleriesParams) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries?page=${page}&size=${size}`,
  );
  return response?.data as GalleriesData;
};

export const getGallery = async (galleryId: number) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/${galleryId}`
  );
  return response?.data;
};

export const getGalleryInfo = async (id: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/${id}`
  );
  return response?.data;
};

export const getGalleryDetail = async (id: number) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/info?gallery-id=${id}`
  );
  return response?.data;
};

export const postReview = async (reviewData: PostReview) => {
  const response = await instance.post(`${import.meta.env.VITE_DEV_URL}api/reviews`, reviewData);
  if (response.status === 200) {
    console.log('성공');
  } else {
    console.log('실패');
  }
};