import { useState, useEffect, useRef, useCallback } from 'react';
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

  // 메세지 받는 callback 함수
  const callback = useCallback((message: ChatMessageResponse) => {
    const messageData = JSON.parse(message.content);
    setMessages((prevMessages) => [...prevMessages, messageData]);
  }, []);

  const { connect, disconnect, sendMessage } = useStomp(
    chatRoomId,
    accessToken as string,
    callback,
  );

  // 스크롤 아래로 이동
  const ref = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  // 과거 채팅 불러오기, WebSocket 연결
  const { data } = useGetMessages(chatRoomId);
  useEffect(() => {
    if (data) {
      setMessages(data);
    }
    scrollToBottom();

    connect();

    // 언마운트시 연결 종료
    return () => {
      disconnect();
    };
  }, [data]);

  // 새로운 채팅 보내기
  const postMessage = () => {
    const messageBody = { content: newMessage };
    sendMessage(`/pub/ws/${chatRoomId}/chat-messages`, messageBody);
    setNewMessage('');
  };

  // 메세지 추가될 때
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  return (
    <S.Container>
      <S.ContentBox ref={ref}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            name={'msg.nickname'}
            profileImage={'default'}
            content={msg.content}
          />
          // 작가 메세지 구분 추후 추가
        ))}
      </S.ContentBox>
      <S.InputBox>
        <S.Input placeholder="채팅 입력" value={newMessage} onChange={onInputChange} />
        <Icon value="send" onClick={postMessage} />
      </S.InputBox>
    </S.Container>
  );
};

export default ChatMenu;
