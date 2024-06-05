import instance from './instance';
import { GalleriesData, GalleryParams } from '@/types/gallery';
import { PostGalleries } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const response = await instance.post('/api/galleries', formData);
  return response?.data;
};
interface GetGalleriesParams extends Partial<GalleryParams> {
  page?: number;
  size?: number;
}

export const getGalleries = async ({ page = 0, size = 6 }: GetGalleriesParams) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/galleries?page=${page}&size=${size}`,
  );
  return response?.data as GalleriesData;
};