import { Text } from '..';
import useOutsideClick from '@/hooks/useOutsideClick';
// import useNotification from '@/hooks/useNotification';

import * as S from './styles';

const Notification = () => {
  // const data = useNotification();
  const { isExpand, onToggle, ref } = useOutsideClick();
  return (
    <S.Container ref={ref as React.RefObject<HTMLDivElement>} isExpand={isExpand}>
      <Text typography="t6">알림</Text>
      <S.CancelIcon value="cancel" size={12} onClick={onToggle} />
      <Text typography="t6">다 담벼 시발</Text>
    </S.Container>
  );
};

export default Notification;
