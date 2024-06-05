import instance from './instance';
import { PostGalleries } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const response = await instance.post('/api/galleries', formData);
  return response?.data;
};
