import instance from './instance';

export const postPayment = async (
  galleryId: number | null,
  order: 'ticket' | 'paidGallery',
) => {
  const response = await instance.post(`/api/payment`, {
    galleryId,
    order,
  });
  return response?.data;
};

export const getPayment = async (page: number, size: number) => {
  const response = await instance.get(`/api/payment/?page=${page}&size=${size}`);
  return response?.data;
};
