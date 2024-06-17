import { getChatMessage } from '@/apis/chat';
import { useQuery } from '@tanstack/react-query';

export const useGetMessages = (chatRoomId: number) =>
  useQuery({
    queryKey: ['message', chatRoomId],
    queryFn: () => getChatMessage(chatRoomId),
    enabled: !!chatRoomId,
  });
