export const PaymentData = {
  pages: [
    {
      paymentId: 2,
      amount: 1000,
      approvedAt: '2024-05-23T12:00:00Z',
      order: 'ticket',
      galleryName: 'A 전시관',
    },
    {
      paymentId: 1,
      amount: 1200,
      approvedAt: '2024-05-23T12:00:00Z',
      order: 'paidGallery',
      galleryName: 'B 전시관',
    },
  ],
  pageInfo: {
    pageIndex: 0, //현재 페이지
    isDone: true, //마지막 페이지 여부
  },
};
