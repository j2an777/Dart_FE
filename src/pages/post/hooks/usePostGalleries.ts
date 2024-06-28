import { postGalleries } from '@/apis/gallery';
import { PostGalleries } from '@/types/post';
import { useMutation } from '@tanstack/react-query';

export interface PostGalleriesResponse {
  galleryId: number;
}

const usePostGalleries = () => {
  return useMutation({
    mutationKey: ['post'],
    mutationFn: async (data: PostGalleries) => postGalleries(data),
  });
};

export default usePostGalleries;
