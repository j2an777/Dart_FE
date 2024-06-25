import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/icon';
import Message from './Message';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';
import useGetMessages from '../../hooks/useGetMessages';
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
      setMessages((prevMessages) => [...prevMessages, message]);
    },
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetMessages(chatRoomId);
  const observerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 새로운 채팅 보내기
  const postMessage = () => {
    const message: ChatMessageRequest = { content: newMessage };
    sendMessage(`/pub/ws/${chatRoomId}/chat-messages`, message);
    setNewMessage('');
  };

  // 웹소켓 연결 및 과거 채팅 불러오기
  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    if (data) {
      const allMessages = data.pages.flatMap((page) => page.pages);
      setMessages(allMessages);
    }
  }, [data]);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: '10px', threshold: 0.1 },
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

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
    // keyDown 이벤트 오류(한글 2번 입력됨) 해결
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
      <S.ContentBox>
        <S.ScrollableContainer ref={scrollRef}>
          <div ref={observerRef}>
            {messages.map((msg, index) => (
              <Message
                key={index}
                sender={msg.sender}
                profileImageUrl={msg.profileImageUrl}
                content={msg.content}
                isAuthor={msg.isAuthor}
              />
            ))}
          </div>
        </S.ScrollableContainer>
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
