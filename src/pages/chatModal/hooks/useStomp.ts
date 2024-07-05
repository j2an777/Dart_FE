import { useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client, IFrame, Message } from '@stomp/stompjs';
import { ChatMessageProps } from '@/types/chat';
import { memberStore } from '@/stores/member';

const MAX_RECONNECT_ATTEMPTS = 3;

export const useStomp = (
  chatRoomId: number,
  accessToken: string,
  callback: (message: ChatMessageProps) => void = () => {},
) => {
  const [client, setClient] = useState<Client | null>(null);
  const [token, setToken] = useState<string>(accessToken);
  const [error, setError] = useState<boolean>(false);
  const reconnectAttemptsRef = useRef(0);

  const getStompHeaders = () => ({
    Authorization: `Bearer ${token}`,
  });

  const connect = () => {
    if (reconnectAttemptsRef.current >= MAX_RECONNECT_ATTEMPTS) {
      console.log('token 오류 종료');
      setError(true);
      return;
    }

    const socket = new SockJS(import.meta.env.VITE_SOCKET_URL);

    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: getStompHeaders(),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        setClient(client);
        reconnectAttemptsRef.current = 0;
        client?.subscribe(`/sub/ws/${chatRoomId}`, onMessageReceived, getStompHeaders());
        console.log('websocket 연결 및 구독');
      },
    });

    // 에러 메세지
    client.onStompError = (frame) => {
      console.error('Stomp error: ' + frame.body);
      handleStompError(frame);
    };

    client.onWebSocketError = (event) => {
      console.error('WebSocket Error:', event);
      setError(true);
    };

    client.onWebSocketClose = (event) => {
      console.error('WebSocket Closed:', event);
      setError(true);
    };

    client.activate();
  };

  const handleStompError = async (frame: IFrame) => {
    if (frame.body.includes('[❎ ERROR] 로그인이 필요한 기능입니다.')) {
      const { accessToken: newToken } = memberStore.getState();
      setToken(newToken as string);
      console.log('소켓 token reissued');
      tryReconnect();
    }
  };

  const tryReconnect = () => {
    if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
      reconnectAttemptsRef.current += 1;
      console.log('tryReconnect:', reconnectAttemptsRef.current);
      reconnect();
    }
  };

  const reconnect = async () => {
    console.log('reconnect');
    if (client) {
      client.deactivate();
    }
    setClient(null);
    connect();
  };

  const disconnect = () => {
    client?.deactivate();
    setClient(null);
    console.log('웹소켓 연결 종료');
  };

  const sendMessage = (destination: string, content: ChatMessageProps) => {
    if (client && client.connected) {
      try {
        client.publish({
          destination,
          headers: getStompHeaders(),
          body: JSON.stringify(content),
        });
      } catch (error) {
        console.error('전송 오류:', error);
        setError(true);
      }
    } else {
      console.error('웹소켓 연결 오류');
      setError(true);
    }
  };

  const onMessageReceived = (message: Message) => {
    const parsedBody = JSON.parse(message.body);

    const newChat = {
      content: parsedBody.content,
      isAuthor: parsedBody.isAuthor,
      createdAt: parsedBody.createdAt,
      sender: parsedBody.sender,
      profileImageUrl: parsedBody.profileImageUrl,
    };

    callback(newChat);
  };

  return { connect, disconnect, sendMessage, error };
};

export default useStomp;
