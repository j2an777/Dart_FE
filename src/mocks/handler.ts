import { http, HttpResponse } from 'msw';

const members = new Map();

export const handlers = [
  http.post('/api/signup', async ({ request }) => {
    const newMember = await request.json();
    members.set(1, newMember);

    return HttpResponse.json(newMember, { status: 200 });
  }),
];
