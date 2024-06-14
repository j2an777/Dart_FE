import instance from './instance';
import { FilterType, GalleriesData } from '@/types/gallery';
import { PostGalleries } from '@/types/post';

export const postGalleries = async (formData: PostGalleries) => {
  const { thumbnail, images, gallery } = formData;
  const data = new FormData();

  if (thumbnail) {
    data.append('thumbnail', thumbnail);
  }

  if (images) {
    images.forEach((image) => {
      data.append('images', image);
    });
  }

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
    `/api/galleries?page=${pageIndex}&size=${size}&category=${category}&cost=${cost}&display=${display}&keyword=${keyword}&sort=${sort}`,
  );
  return response?.data as GalleriesData;
};

// 전시 페이지 get
export const getGallery = async (galleryId: number) => {
  const response = await instance.get(`/api/galleries/${galleryId}`);
  return response?.data;
};

// 전시 설명 모달
export const getGalleryInfo = async (galleryId: number) => {
  const response = await instance.get(`/api/galleries/info?gallery-id=${galleryId}`);
  return response?.data;
};
