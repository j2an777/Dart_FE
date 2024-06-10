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
  pageIndex?: number;
  size?: number;
}

export const getGalleries = async ({
  pageIndex = 0,
  size = 6,
  category = 'title',
  cost = 'free',
  display = 'all',
  keyword = '',
  sort = 'latest',
}: GetGalleriesParams) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries?page=${pageIndex}&size=${size}&category=${category}&cost=${cost}&display=${display}&keyword=${keyword}&sort=${sort}`,
  );
  return response?.data as GalleriesData;
};

export const getGalleryInfo = async (id: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/${id}`,
  );
  return response?.data;
};

export const getGalleryDetail = async (id: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/info?gallery-id=${id}`,
  );
  return response?.data;
};

export const postReview = async (reviewData: PostReview) => {
  const response = await instance.post(
    `${import.meta.env.VITE_DEV_URL}api/reviews`,
    reviewData,
  );
  return response?.data;
};
