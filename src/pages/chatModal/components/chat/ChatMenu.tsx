import { useState, useEffect } from 'react';
import { Icon, Text } from '@/components';
import Message from './Message';
import { ChatMessageProps } from '@/types/chat';
import useGetMessages from '../../hooks/useGetMessages';
import { memberStore } from '@/stores/member';
import useStomp from '../../hooks/useStomp';
import { useChatScroll } from '../../hooks/useChatScroll';
import { ChatProps } from '../..';
import * as S from './styles';
import parseDate from '@/utils/parseDate';
import { formatDate } from '@/utils/formatDateforChat';

const ChatMenu = ({ chatRoomId, galleryNick }: Omit<ChatProps, 'open'>) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const { accessToken } = memberStore.getState();

  // 웹소켓 연결
  const { connect, disconnect, sendMessage, error } = useStomp(
    chatRoomId,
    accessToken as string,
    (message: ChatMessageProps) => {
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

  const nickname = memberStore((state) => state.auth.nickname);
  const profileImage = memberStore((state) => state.auth.profileImage);
  const isAuthor = galleryNick == nickname ? true : false;
  // 새로운 채팅 보내기
  const postMessage = () => {
    if (!newMessage.trim()) return;
    const message: ChatMessageProps = {
      content: newMessage,
      sender: nickname,
      createdAt: formatDate(new Date()),
      isAuthor: isAuthor,
      profileImageUrl: profileImage,
    };

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
          {messages.map((msg, index) => {
            const showDate =
              index === 0 ||
              parseDate(msg.createdAt) !== parseDate(messages[index - 1].createdAt);
            return (
              <div key={index}>
                {showDate && (
                  <S.Date>
                    <Text typography="t6" bold="regular" color="white">
                      {parseDate(msg.createdAt)}
                    </Text>
                    <S.Line />
                  </S.Date>
                )}
                <Message
                  sender={msg.sender}
                  profileImageUrl={msg.profileImageUrl}
                  content={msg.content}
                  isAuthor={msg.isAuthor}
                />
              </div>
            );
          })}
        </S.ContentBox>
      </S.ScrollableContainer>

      <S.InputBox>
        <S.Input
          placeholder={error ? '[연결 오류] 채팅을 닫고 다시 시도해 주세요' : '채팅 입력'}
          value={newMessage}
          onChange={onInputChange}
          onKeyDown={onEnter}
          maxLength={50}
          disabled={!!error}
        />
        <Icon value="send" onClick={postMessage} />
      </S.InputBox>
    </S.Container>
  );
};

export default ChatMenu;
