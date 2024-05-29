import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
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

// msw
