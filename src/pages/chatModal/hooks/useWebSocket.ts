import { useState, useEffect } from 'react';
import { Client, Message, StompConfig } from '@stomp/stompjs';
import { ChatMessageResponse } from '@/types/chat';
import { memberStore } from '@/stores/member';

const useWebSocket = (
  chatRoomId: number,
  onMessage: (msg: ChatMessageResponse) => void,
) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const { accessToken } = memberStore.getState();

  useEffect(() => {
    if (!accessToken) {
      console.error('No access token available');
      return;
    }

    const client = new Client({
      brokerURL: import.meta.env.VITE_SOCKET_URL,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to WebSocket');
        client.subscribe(`/sub/ws/${chatRoomId}`, (message: Message) => {
          console.log(`Received: ${message.body}`);
          const msg: ChatMessageResponse = JSON.parse(message.body);
          onMessage(msg);
        });
      },

      //에러 메세지
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
      onWebSocketError: (event) => {
        console.error('WebSocket Error:', event);
      },
      onWebSocketClose: (event) => {
        console.error('WebSocket Closed:', event);
      },
    } as StompConfig);

    client.activate();
    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
        setStompClient(null);
      }
    };
  }, [accessToken, chatRoomId, onMessage]);

  return stompClient;
};

export default useWebSocket;
