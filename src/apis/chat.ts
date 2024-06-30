import { ChatMembers, ChatMessage } from '@/types/chat';
import instance from './instance';

interface FetchParams {
  chatRoomId: number;
  pageParam?: number;
  size: number;
}

// 채팅 메시지 전체 조회
export const getChatMessage = async ({ chatRoomId, pageParam, size }: FetchParams) => {
  const response = await instance.get(`/${chatRoomId}/chat-messages`, {
    params: {
      page: pageParam,
      size,
    },
  });
  return response?.data as ChatMessage;
};

// 실시간 접속자 조회
export const getChatMembers = async (chatRoomId: number) => {
  const response = await instance.get(`/chat-rooms/${chatRoomId}/members`);
  return response?.data as ChatMembers[];
};
