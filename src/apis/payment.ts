import instance from './instance';

export const getPayment = async (nickname?: string) => {
  const response = await instance.get(`/api/payment?nickname=${nickname}`);
  return response?.data;
};
