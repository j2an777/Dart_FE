import { useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, Message } from '@stomp/stompjs';
import { ChatMessageProps } from '@/types/chat';

export const useStomp = (
  chatRoomId: number,
  accessToken: string,
  callback: (message: ChatMessageProps) => void = () => {},
) => {
  const [client, setClient] = useState<Client | null>(null);
  const stompHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  const connect = () => {
    const socket = new SockJS('https://dartgallery.site/ws');

    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: stompHeaders,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        setClient(client);
        client?.subscribe(`/sub/ws/${chatRoomId}`, onMessageReceived, stompHeaders);
        console.log('websocket 연결 및 구독');
      },
    });

    // 에러 메세지
    client.onStompError = (frame) => {
      console.error('Stomp error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    client.onWebSocketError = (event) => {
      console.error('WebSocket Error:', event);
    };

    client.onWebSocketClose = (event) => {
      console.error('WebSocket Closed:', event);
    };

    client.activate();
  };

  const disconnect = () => {
    client?.deactivate();
    setClient(null);
    console.log('WebSocket 연결 종료');
  };

  const sendMessage = (destination: string, content: ChatMessageProps) => {
    if (client && client.connected) {
      try {
        client.publish({
          destination,
          headers: stompHeaders,
          body: JSON.stringify(content),
        });
      } catch (error) {
        console.error('메세지 전송 오류:', error);
      }
    } else {
      console.error('WebSocket 연결 에러');
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

  return { connect, disconnect, sendMessage };
};

export default useStomp;
