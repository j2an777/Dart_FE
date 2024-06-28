import { ChatMessageResponse } from '@/types/chat';
import { useCallback, useEffect, useRef } from 'react';

export const useChatScroll = (
  messages: ChatMessageResponse[],
  fetchNextPage: () => void,
  hasNextPage: boolean,
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const previousScrollHeightRef = useRef<number>(0);

  // 스크롤 최하단으로 이동
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    }
  }, []);

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          // 현재 스크롤 높이를 저장
          if (scrollRef.current) {
            previousScrollHeightRef.current = scrollRef.current.scrollHeight;
          }
          fetchNextPage();
        }
      },
      { threshold: 0.3 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  // 스크롤 위치 유지
  // useEffect(() => {
  //   if (scrollRef.current && previousScrollHeightRef.current) {
  //     scrollRef.current.scrollTop =
  //       scrollRef.current.scrollHeight - previousScrollHeightRef.current;
  //     previousScrollHeightRef.current = 0;
  //   }
  // }, [messages]);

  return { scrollRef, observerRef, scrollToBottom };
};
