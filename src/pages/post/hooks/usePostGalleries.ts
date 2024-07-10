import { postGalleries } from '@/apis/gallery';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { PostGalleries } from '@/types/post';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import useUploadingBar from './useUploadingBar';
import { progressStore } from '@/stores/modal';

export interface PostGalleriesResponse {
  galleryId: number;
}

const usePostGalleries = () => {
  const navigate = useCustomNavigate();
  const [generatedCost, setGeneratedCost] = useState<number>(0);
  const { getProgressData } = useUploadingBar();
  const setProgress = progressStore((state) => state.setProgress);

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  return useMutation({
    mutationKey: ['post'],
    mutationFn: async (data: PostGalleries) => {
      setGeneratedCost(data.gallery.generatedCost);
      getProgressData();
      return postGalleries(data, onProgress);
    },
    onSuccess: (idData: PostGalleriesResponse) => {
      const { galleryId } = idData;
      if (galleryId) {
        if (generatedCost !== 0) {
          navigate(`/payment/${galleryId}/paidGallery`);
        } else {
          navigate(`/payment/success/${galleryId}/create`);
        }
      } else {
        console.error('Gallery ID could not be retrieved.');
      }
    },
    onError: () => {},
  });
};

export default usePostGalleries;
