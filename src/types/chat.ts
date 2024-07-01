export interface Page {
  pageIndex: number;
  isDone: boolean;
}

export interface ChatMessage {
  pages: ChatMessageResponse[];
  pageInfo: Page;
}

export interface ChatMessageRequest {
  content: string;
}

export interface ChatMessageResponse {
  sender: string;
  content: string;
  createdAt: Date;
  isAuthor: boolean;
  profileImageUrl: string;
}

export interface ChatMembers {
  nickname: string;
  sessionId: string;
  destination: string;
  profileImageUrl: string;
}
