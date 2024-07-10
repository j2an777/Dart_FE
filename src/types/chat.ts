export interface Page {
  pageIndex: number;
  isDone: boolean;
}

export interface ChatMessage {
  pages: ChatMessageProps[];
  pageInfo: Page;
}

export interface ChatMessageProps {
  sender: string;
  content: string;
  createdAt: Date | string;
  isAuthor: boolean;
  profileImageUrl: string;
}

export interface ChatMembers {
  nickname: string;
  sessionId: string;
  destination: string;
  profileImageUrl: string;
}
