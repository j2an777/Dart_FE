import { useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, Message } from '@stomp/stompjs';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';
import { memberStore } from '@/stores/member';

export const useStomp = (
  chatRoomId: number,
  galleryNick: string,
  accessToken: string,
  callback: (message: ChatMessageResponse) => void = () => {},
) => {
  const [client, setClient] = useState<Client | null>(null);
  const stompHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
  const nickname = memberStore((state) => state.auth.nickname);
  const profileImage = memberStore((state) => state.auth.profileImage);

  const connect = () => {
    const socket = new SockJS(import.meta.env.VITE_SOCKET_URL);

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

  const sendMessage = (destination: string, content: ChatMessageRequest) => {
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
  const isAuthor = galleryNick == nickname ? true : false;

  const onMessageReceived = (message: Message) => {
    console.log(message);
    const newChat = {
      content: message.body,
      isAuthor: isAuthor,
      createdAt: new Date(),
      sender: nickname,
      profileImageUrl: profileImage,
    };

    callback(newChat);
  };

  return { connect, disconnect, sendMessage };
};

export default useStomp;
