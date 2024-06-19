export interface ChatMessage {
  chatRoomId: number;
  email: string;
  nickname: string;
  message: string;
  sendAt: Date;
}

export interface ChatMessageRequest {
  content: string;
}

export interface ChatMessageResponse {
  sender: string;
  content: string;
  createAt: Date;
}
