import { create } from 'zustand';

interface PageInfo {
  pageIndex: number;
  isFirst: boolean;
  isDone: boolean;
}

interface PageState {
  pageInfo: PageInfo;
  nextPage: () => void;
  prevPage: () => void;
  setPageInfo: (form: Omit<PageInfo, 'isFirst'>) => void;
}

const defaultValue: PageInfo = {
  isDone: false,
  isFirst: true,
  pageIndex: 0,
};

export const pageStore = create<PageState>((set, get) => ({
  pageInfo: defaultValue,
  nextPage: () => {
    const { pageInfo } = get();
    if (pageInfo.isDone) return;
    set({ pageInfo: { ...pageInfo, pageIndex: pageInfo.pageIndex + 1, isFirst: false } });
  },
  prevPage: () => {
    const { pageInfo } = get();
    if (pageInfo.isFirst) return;
    set({
      pageInfo: {
        ...pageInfo,
        pageIndex: pageInfo.pageIndex - 1,
        isFirst: pageInfo.pageIndex - 1 === 0,
      },
    });
  },
  checkIfFirst: () => {
    const { pageInfo } = get();
    return pageInfo.pageIndex === 0;
  },
  setPageInfo: (form) =>
    set((prev) => ({
      ...prev,
      pageInfo: { ...prev.pageInfo, isDone: form.isDone, pageIndex: form.pageIndex },
    })),
}));
// isDone 부분만 수정을 하면 될 것 같다!!!
