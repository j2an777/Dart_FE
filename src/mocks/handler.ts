import { http, HttpResponse } from 'msw';

const members = new Map();

export const handlers = [
  http.post('/api/signup', async ({ request }) => {
    const newMember = await request.json();
    members.set(1, newMember);

    return HttpResponse.json(newMember, { status: 200 });
  }),
  http.get(`/api/galleries?gallery-id={gallery-id}`, () => {
    return HttpResponse.json({
      title: "솔문쨩의 갤러리",
      thumbnail: "C:/Users/hallym/Desktop/thumbnail.png",
      isFirst: true,
      images: [
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
        {
          image: "",
          description: "이 작품은 솔문쨩이 은밀하게 화장실에서 새코달콤을 먹는 모습을 르네상스에 맞춰 비춘 작품이다."
        },
      ]
    });
  }),
];
