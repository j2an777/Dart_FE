import { http, HttpResponse } from 'msw';
import { GalleryData } from './mockData/galleryData';

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
  // 회원정보 가져오기
  http.get('/api/members', async ({ request }) => {
    const url = new URL(request.url);
    const nickname = url.searchParams.get('nickname');
    const accessToken = request.headers.get('Authorization');
    if (!accessToken) {
      return HttpResponse.json(
        {
          message: '로그인 후 가능합니다',
        },
        { status: 401 },
      );
    }
    if (nickname === 'undefined') {
      return HttpResponse.json(
        {
          nickname: 'user1',
        },
        { status: 200 },
      );
    }
    return HttpResponse.json(
      {
        message: '다른 유저 정보를 받은 경우',
      },
      { status: 200 },
    );
  }),
  http.get('/api/galleries/1', () => {
    return HttpResponse.json(GalleryData);
  }),
  http.put('/api/members', async () => {
    return HttpResponse.json({ status: 200 });
  }),
  http.get('/api/galleries', () => {
    return HttpResponse.json(galleries1, { status: 200 });
  }),
];
