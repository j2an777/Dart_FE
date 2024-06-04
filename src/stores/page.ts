import { getGalleries } from '@/apis/gallery';
import { create } from 'zustand';

interface PageInfo {
  page: number;
  isFirst: boolean;
  isDone: boolean;
}

interface PageState {
  pageInfo: PageInfo;
  nextPage: () => void;
  prevPage: () => void;
}

const defaultValue: PageInfo = {
  isDone: false,
  isFirst: true,
  page: 0,
};

export const pageStore = create<PageState>((set, get) => ({
  pageInfo: defaultValue,
  nextPage: () => {
    const { pageInfo } = get();
    if (pageInfo.isDone) return;
    set({ pageInfo: { ...pageInfo, page: pageInfo.page + 1, isFirst: false } });
  },
  prevPage: () => {
    const { pageInfo } = get();
    if (pageInfo.isFirst) return;
    set({
      pageInfo: {
        ...pageInfo,
        page: pageInfo.page - 1,
        isFirst: pageInfo.page - 1 === 0,
      },
    });
  },
  checkIfFirst: () => {
    const { pageInfo } = get();
    return pageInfo.page === 0;
  },
  checkIfDone: async () => {
    const response = await getGalleries({});
    return response.pageInfo.isDone;
  },
}));
// isDone 부분만 수정을 하면 될 것 같다!!!
