import { blobToFile, compressImage, isValidImageType } from '@/hooks/useCompress';
import instance from './instance';
import { FilterType, GalleriesData, GalleryData } from '@/types/gallery';
import { PostGalleries } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const { thumbnail, images, gallery } = formData;
  const data = new FormData();

  if (thumbnail) {
    data.append('thumbnail', thumbnail);
  }

  // 이미지 압축해서 blob을 file형태로 변환
  if (images) {
    for (const image of images) {
      if (isValidImageType(image)) {
        const compressedImage = await compressImage(image);
        if (compressedImage) {
          const file = blobToFile(compressedImage, image.name);
          data.append('images', file);
        }
      } else {
        console.error('Unsupported file type:', image.type);
      }
    }
  }

  data.append(
    'gallery',
    new Blob([JSON.stringify(gallery)], { type: 'application/json' }),
  );

  const response = await instance.post('/galleries', data, {
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

export const getGalleries = async (params: GetGalleriesParams) => {
  const response = await instance.get(`/galleries`, { params });
  return response?.data as GalleriesData;
};

// 전시 페이지 get
export const getGallery = async (galleryId: number) => {
  const response = await instance.get(`/galleries/${galleryId}`);
  return response?.data as GalleryData;
};

// 전시 설명 모달
export const getGalleryInfo = async (galleryId: number) => {
  const response = await instance.get(`/galleries/info?gallery-id=${galleryId}`);
  return response?.data;
};

// 전시 삭제
export const deleteGallery = async (galleryId: number) => {
  const response = await instance.delete(`/galleries`, {
    data: { galleryId },
  });
  return response?.data;
};
