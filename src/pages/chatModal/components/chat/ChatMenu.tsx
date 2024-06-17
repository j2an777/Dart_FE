import { useState, useEffect, useRef } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import Icon from '@/components/icon';
import Message from './Message';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';
import { useGetMessages } from '../../hooks/useGetMessages';
import { memberStore } from '@/stores/member';
import * as S from './styles';

const ChatMenu = () => {
  const { nickname } = memberStore((state) => state.auth);
  const chatRoomId = 10; // 수정
  const [stompClient, setStompClient] = useState<Client | null>(null);
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

  // 새로운 채팅 보내기
  const sendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatMessageRequest = {
        from: nickname,
        content: newMessage,
        chatRoomId: chatRoomId,
      };
      stompClient.publish({
        destination: `/pub/ws/${chatRoomId}/chat-messages`,
        body: JSON.stringify(chatMessage),
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          chatRoomId,
          nickname,
          profileImage: 'defaultImage',
          content: newMessage,
          sendAt: new Date(),
        },
      ]);

      setNewMessage('');
    }
  };

  // 첫 마운트
  useEffect(() => {
    scrollToBottom();

    if (data) {
      setMessages(data);
    }

    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws', // 서버 WebSocket URL 연결 -> .env로 수정 예정
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/sub/ws/${chatRoomId}`, (message: IMessage) => {
          const msg: ChatMessageResponse = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, msg]);
        });
      },
    });
    client.activate();
    setStompClient(client);
    return () => {
      client.deactivate();
    };
  }, [data, chatRoomId]);

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
            name={msg.nickname}
            profileImage={msg.profileImage}
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
