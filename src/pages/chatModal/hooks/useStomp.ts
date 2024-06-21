import { useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';
import { ChatMessageRequest, ChatMessageResponse } from '@/types/chat';

export const useStomp = (
  chatRoomId: number,
  accessToken: string,
  callback: (msg: ChatMessageResponse) => void,
) => {
  const [client, setClient] = useState<Client | null>(null);

  const connect = () => {
    const socket = new SockJS(import.meta.env.VITE_SOCKET_URL);

    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      reconnectDelay: 5000,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Websocket 연결');
        subscribe();
        setClient(client);
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

  // callback 함수 수정
  const subscribe = () => {
    client?.subscribe(
      `/sub/ws/${chatRoomId}`,
      (message: IMessage) => {
        if (message.body) {
          try {
            const messageData: ChatMessageResponse = JSON.parse(message.body);
            callback(messageData);
          } catch (error) {
            console.error('Error:', error);
          }
        }
      },
      {
        Authorization: `Bearer ${accessToken}`,
      },
    );
    console.log('socket 구독');
  };

  const disconnect = () => {
    client?.deactivate();
    setClient(null);
    console.log('WebSocket 연결 종료');
  };

  const sendMessage = (destination: string, content: ChatMessageRequest) => {
    if (client && client.connected) {
      client.publish({ destination, body: JSON.stringify(content) });
      console.log('메세지 전송');
    } else {
      console.error('WebSocket 연결 애러');
    }
  };

  return { connect, disconnect, sendMessage };
};

export default useStomp;
