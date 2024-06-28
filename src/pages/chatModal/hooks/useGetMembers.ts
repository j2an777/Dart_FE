import { getChatMembers } from '@/apis/chat';
import { useQuery } from '@tanstack/react-query';

export const useGetMembers = (chatRoomId: number) => {
  return useQuery({
    queryKey: ['members', chatRoomId],
    queryFn: () => getChatMembers(chatRoomId),
    enabled: !!chatRoomId,
  });
};
