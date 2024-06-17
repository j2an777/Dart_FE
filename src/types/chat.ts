export interface ChatMessage {
  chatRoomId: number;
  email: string;
  nickname: string;
  message: string;
  sendAt: Date;
}

export interface ChatMessageRequest {
  from: string;
  content: string;
  chatRoomId: number;
}

export interface ChatMessageResponse {
  chatRoomId: number;
  nickname: string;
  profileImage: string;
  content: string;
  sendAt: Date;
}
