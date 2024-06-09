import instance from './instance';
import { FilterType, GalleriesData } from '@/types/gallery';
import { PostGalleries } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const response = await instance.post('/api/galleries', formData);
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

export const getGalleryInfo = async (id: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/${id}`
  );
  return response?.data;
}

export const getGalleryDetail = async (id: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries/info?gallery-id=${id}`
  );
  return response?.data;
}