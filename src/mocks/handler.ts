import { http, HttpResponse } from 'msw';

const galleries1 = {
  pages: [
    {
      galleryId: 1,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
    {
      galleryId: 2,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
    {
      galleryId: 3,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
    {
      galleryId: 4,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
    {
      galleryId: 5,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
    {
      galleryId: 6,
      thumbnail: 'https://asdfasdf.com/asdfasdf',
      title: '개지리는 전시회',
      startDate: new Date('2024-05-23T12:00:00Z'),
      endDate: new Date('2024-05-31T12:00:00Z'),
      hashtags: ['재밌는그림', '자바', '자바스크립트'],
    },
  ],
  pageInfo: {
    pageIndex: 0, //현재 페이지
    isDone: true, //마지막 페이지 여부
  },
};

export const handlers = [
  http.put('/api/members', async ({ request }) => {
    const data = await request.formData();
    // formData 보내기 확인. 나중에 삭제 요망
    console.log('Received data: ');
    data.forEach((value, key) => {
      if (value instanceof File) {
          console.log(`${key}: [File] ${value.name}, ${value.size} bytes, ${value.type}`);
      } else {
          console.log(`${key}: ${value}`);
      }
    });

    return HttpResponse.json(
      {
        message: 'ok',
        data,
      },
      { status: 200 }
    );
  }),
  // 전시 전체 조회
  http.get('/api/galleries', () => {
    return HttpResponse.json(galleries1, { status: 200 });
  }),
  // 리뷰 작성
  http.post('/api/reviews', async ({ request }) => {
    const data = await request.json();

    return HttpResponse.json(
      data,
      { status: 200 }
    );
  })
];
