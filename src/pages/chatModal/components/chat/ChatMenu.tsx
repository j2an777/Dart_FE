import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/icon';
import Message from './Message';
import { ChatMessageResponse } from '@/types/chat';
import { useGetMessages } from '../../hooks/useGetMessages';
import { memberStore } from '@/stores/member';
import * as S from './styles';
import useStomp from '../../hooks/useStomp';

const ChatMenu = ({ chatRoomId }: { chatRoomId: number }) => {
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const { accessToken } = memberStore.getState();
  const { connect, disconnect, sendMessage } = useStomp(
    chatRoomId,
    accessToken as string,
    (message: ChatMessageResponse) => {
      const messageData = JSON.parse(message.content);
      setMessages((prevMessages) => [...prevMessages, messageData]);
    },
  );

  const { data, fetchNextPage, hasNextPage } = useGetMessages(chatRoomId);
  const observerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 새로운 채팅 보내기
  const postMessage = () => {
    const messageBody = { content: newMessage };
    sendMessage(`/pub/ws/${chatRoomId}/chat-messages`, messageBody);
    setNewMessage('');
  };

  // 웹소켓 연결 및 과거 채팅 불러오기
  useEffect(() => {
    connect();

    if (data) {
      const allMessages = data.pages.flatMap((page) => page.pages);
      setMessages(allMessages);
    }

    return () => disconnect();
  }, [data]);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { root: scrollRef.current, rootMargin: '10px', threshold: 0.5 },
    );
    if (observerRef.current) observer.observe(observerRef.current);
  }, [hasNextPage, fetchNextPage]);

  // 스크롤 아래로 이동
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      postMessage();
    }
  };

  return (
    <S.Container>
      <S.ContentBox ref={scrollRef}>
        <div ref={observerRef}>
          {messages.map((msg, index) => (
            <Message
              key={index}
              name={'msg.nickname'}
              profileImage={'default'}
              content={msg.content}
            />
            // 작가 메세지 구분 추후 추가
          ))}
        </div>
      </S.ContentBox>
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
