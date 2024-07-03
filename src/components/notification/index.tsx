import { Text } from '..';
import useOutsideClick from '@/hooks/useOutsideClick';
import useNotification from '@/hooks/useNotification';

import * as S from './styles';
import { useEffect } from 'react';

const Notification = () => {
  const { isExpand, onToggle, ref, setIsExpand, excludeRef } = useOutsideClick();
  const response = useNotification();
  useEffect(() => {
    if (response.type) {
      setIsExpand(true);
    }
  }, [response.type, response.count]);
  return (
    <S.Container ref={ref as React.RefObject<HTMLDivElement>} isExpand={isExpand}>
      <Text typography="t6">{response.type === 'live' ? '이벤트' : '알림'}</Text>
      <S.CancelIcon
        value="cancel"
        size={12}
        onClick={onToggle}
        ref={excludeRef as React.RefObject<HTMLDivElement>}
      />
      <Text typography="t6">{response.message}</Text>
    </S.Container>
  );
};

export default Notification;
