import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@/components/icon';
import Message from './Message';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';
import { useGetMessages } from '../../hooks/useGetMessages';
import { memberStore } from '@/stores/member';
import * as S from './styles';
import useWebSocket from '../../hooks/useWebSocket';

const ChatMenu = ({ chatRoomId }: { chatRoomId: number }) => {
  const { nickname } = memberStore((state) => state.auth);
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  // 스크롤 아래로 이동
  const ref = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  // 과거 채팅
  const { data } = useGetMessages(chatRoomId);
  useEffect(() => {
    if (data) {
      setMessages(data);
    }
    scrollToBottom();
  }, [data]);

  // // 새로운 메시지 수신 처리
  const handleIncomingMessage = useCallback((msg: ChatMessageResponse) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  }, []);

  // WebSocket 연결
  const stompClient = useWebSocket(chatRoomId, handleIncomingMessage);

  // 새로운 채팅 보내기
  const sendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatMessageRequest = {
        content: newMessage,
      };
      stompClient.publish({
        destination: `/pub/ws/${chatRoomId}/chat-messages`,
        body: JSON.stringify(chatMessage),
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: nickname,
          content: newMessage,
          createAt: new Date(),
        },
      ]);

      setNewMessage('');
    }
  };

  // 메세지 추가될 때
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        ))}
      </S.ContentBox>
      <S.InputBox>
        <S.Input
          placeholder="채팅 입력"
          value={newMessage}
          onChange={handleInputChange}
        />
        <Icon value="send" onClick={sendMessage} />
      </S.InputBox>
    </S.Container>
  );
};

export default ChatMenu;
