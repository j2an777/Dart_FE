import { getChatMessage } from '@/apis/chat';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetMessages = (chatRoomId: number) => {
  return useInfiniteQuery({
    queryKey: ['messages', chatRoomId],
    queryFn: async ({ pageParam = 0 }) => {
      return await getChatMessage({ chatRoomId, pageParam, size: 10 });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.isDone) return undefined;
      return lastPage.pageInfo.pageIndex + 1;
    },
  });
};

export default useGetMessages;
