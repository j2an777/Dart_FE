import { useState, useEffect } from 'react';
import Icon from '@/components/icon';
import Message from './Message';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';
import useGetMessages from '../../hooks/useGetMessages';
import { memberStore } from '@/stores/member';
import useStomp from '../../hooks/useStomp';
import { useChatScroll } from '../../hooks/useChatScroll';
import { ChatProps } from '../..';
import * as S from './styles';

const ChatMenu = ({ chatRoomId, galleryNick }: Omit<ChatProps, 'open'>) => {
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const { accessToken } = memberStore.getState();

  // 웹소켓 연결
  const { connect, disconnect, sendMessage } = useStomp(
    chatRoomId,
    galleryNick,
    accessToken as string,
    (message: ChatMessageResponse) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    },
  );

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  // 채팅 데이터 불러옴
  const { data, fetchNextPage, hasNextPage } = useGetMessages(chatRoomId);

  useEffect(() => {
    if (data && data.pages) {
      const allMessages = data.pages
        .map((page) => [...page.pages].reverse())
        .flatMap((page) => page)
        .reverse();
      setMessages(allMessages);
    }
  }, [data]);

  const { scrollRef, observerRef, scrollToBottom } = useChatScroll(
    messages,
    fetchNextPage,
    hasNextPage,
  );

  // 새로운 채팅 보내기
  const postMessage = () => {
    if (!newMessage.trim()) return;
    const message: ChatMessageRequest = { content: newMessage };

    sendMessage(`/pub/ws/${chatRoomId}/chat-messages`, message);
    setNewMessage('');
    scrollToBottom();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      postMessage();
    }
  };

  return (
    <S.Container>
      <S.ScrollableContainer ref={scrollRef}>
        <S.ContentBox>
          <div ref={observerRef} />
          {messages.map((msg, index) => (
            <Message
              key={index}
              sender={msg.sender}
              profileImageUrl={msg.profileImageUrl}
              content={msg.content}
              isAuthor={msg.isAuthor}
            />
          ))}
        </S.ContentBox>
      </S.ScrollableContainer>

      <S.InputBox>
        <S.Input
          placeholder="채팅 입력"
          value={newMessage}
          onChange={onInputChange}
          onKeyDown={onEnter}
        />
        <Icon value="send" onClick={postMessage} />
      </S.InputBox>
    </S.Container>
  );
};

export default ChatMenu;
