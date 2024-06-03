import { http, HttpResponse } from 'msw';
import { GalleryData } from './mockData/galleryData';

const members = new Map();

const user1 = {
  email: 'kang123@gmail.com',
  password: '1q2w3e4r!',
};
function isEqual(obj1: object, obj2: object) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
export const handlers = [
  http.post('/api/signup', async ({ request }) => {
    const newMember = await request.json();
    members.set(1, newMember);

    return HttpResponse.json(newMember, { status: 200 });
  }),
  http.post('/api/login', async ({ request }) => {
    const userInfo = await request.json();
    if (isEqual(user1, userInfo as object))
      return HttpResponse.json(
        {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        },
        { status: 200 },
      );
    return HttpResponse.json(
      { message: '존재하지 않는 회원정보입니다.' },
      { status: 404 },
    );
  }),
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
  http.get('/api/galleries', () => {
    return HttpResponse.json(GalleryData);
  }),
];
