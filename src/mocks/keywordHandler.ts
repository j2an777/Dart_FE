import { HttpResponse, http } from 'msw';

const keywords: string[] = ['안녕', '안녕하', '안녕하세'];
export const keywordHandler = [
  http.get('/api/search', async () => {
    return HttpResponse.json({ results: keywords } as { results: string[] }, {
      status: 200,
    });
  }),
];
