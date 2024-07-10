import { PostGalleries } from '@/types/post';

export const postValidation = (data: PostGalleries) => {
  if (!data.images || data.images.length < 3) {
    console.log('이미지 길이');
    throw new Error('최소 3개의 작품을 등록해주세요.');
  }

  if (!data.thumbnail) {
    console.log('썸네일');
    throw new Error('썸네일 이미지가 없습니다.');
  }

  if (data.gallery.fee && !data.gallery.endDate) {
    console.log('유료전시');
    throw new Error('유료 전시 기간을 선택해 주세요.');
  }

  return true;
};
