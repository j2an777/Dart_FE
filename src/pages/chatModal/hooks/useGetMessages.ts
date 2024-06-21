import { getChatMessage } from '@/apis/chat';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetMessages = (chatRoomId: number) =>
  useInfiniteQuery({
    queryKey: ['messages', chatRoomId],
    queryFn: ({ pageParam = 0 }) => getChatMessage(chatRoomId, pageParam, 20),
    initialPageParam: 0,
    getNextPageParam: ({ pageInfo }) => pageInfo.pageIndex + 1,
    enabled: !!chatRoomId,
  });
