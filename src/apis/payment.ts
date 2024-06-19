import instance from './instance';

export const postPayment = async (galleryId: number, order: 'ticket' | 'paidGallery') => {
  const response = await instance.post(`/payment`, {
    galleryId,
    order,
  });
  return response?.data;
};

export const getPayment = async (page: number, size: number) => {
  const response = await instance.get('/payment', {
    params: {
      page,
      size,
    },
  });
  return response?.data;
};
