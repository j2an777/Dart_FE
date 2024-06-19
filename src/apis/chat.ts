import instance from './instance';

// 채팅 메시지 전체 조회
export const getChatMessage = async (chatRoomId: number) => {
  const response = await instance.get(`/${chatRoomId}/chatmessages`);
  return response?.data;
};

// 실시간 접속자 조회
export const getChatMembers = async (chatRoomId: number) => {
  const response = await instance.get(`/chat-rooms/${chatRoomId}/members`);
  return response?.data;
};
