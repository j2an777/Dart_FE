import { getChatMessage } from '@/apis/chat';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { alertStore, chatStore } from '@/stores/modal';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useGetMessages = (chatRoomId: number) => {
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);
  const close = chatStore((state) => state.close);

  return useInfiniteQuery({
    queryKey: ['messages', chatRoomId],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        return await getChatMessage({ chatRoomId, pageParam, size: 10 });
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          close();
          open({
            title: '재로그인 필요',
            description: '로그인 시간이 만료되었습니다. 다시 로그인해 주세요.',
            buttonLabel: '확인',
            onClickButton: () => {
              navigate('/login');
            },
          });
        }
        throw axiosError;
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.isDone) return undefined;
      return lastPage.pageInfo.pageIndex + 1;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.pageInfo.isDone) return undefined;
      return firstPage.pageInfo.pageIndex - 1;
    },
  });
};

export default useGetMessages;
