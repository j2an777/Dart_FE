import { HttpResponse, http } from 'msw';

const members = new Map();

const user1 = {
  email: 'kang123@gmail.com',
  password: '1q2w3e4r!',
};

const testEmail = { email: 'kang123@gmail.com' };

function isEqual(obj1: object, obj2: object) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export const memberHandler = [
  http.post('/api/signup', async ({ request }) => {
    const newMember = await request.json();
    members.set(1, newMember);

    return HttpResponse.json(newMember, { status: 200 });
  }),
  // 로그인
  http.post('/api/login', async ({ request }) => {
    const userInfo = await request.json();
    if (isEqual(user1, userInfo as object))
      return HttpResponse.json(
        {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTc1NjYyMTQsImV4cCI6MTcyMDU2NjIxNCwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5pY2tuYW1lIjoidGVzdCJ9.4BC6fjlPBNGU7zxWpt8opoAUSSnKPx7OqfpRxHyYV6A',
        },
        { status: 200 },
      );
    return HttpResponse.json(
      { message: '존재하지 않는 회원정보입니다.' },
      { status: 404 },
    );
  }),
  http.post('/api/email/send', async ({ request }) => {
    const email = await request.json();
    if (isEqual(email as object, testEmail))
      return HttpResponse.json({ message: 'ok' }, { status: 200 });
    else return HttpResponse.json({ message: '이메일 전송 실패' }, { status: 400 });
  }),
];
