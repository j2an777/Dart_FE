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
  createAt: Date;
  isAuthor: boolean;
  profileImageUrl: string;
}

export interface ChatMembers {
  members: string[];
}
