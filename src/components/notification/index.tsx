import useOutsideClick from '@/hooks/useOutsideClick';
import { Icon, Text } from '..';

import * as S from './styles';

const Notification = () => {
  const { isExpand, onToggle } = useOutsideClick();
  return (
    <S.Container>
      <S.AlarmIcon
        value="alarm"
        size={45}
        $active
        onClick={onToggle}
      />
      <S.ExclamationIcon value="exclamation" $active={false} />
      {isExpand && <NotificationModal />}
    </S.Container>
  );
};

const NotificationModal = () => {
  return (
    <S.ModalContainer>
      <S.Outline>
        <S.TitleBox>
          <Text typography="t4">알림</Text>
          <Icon value="cancel" />
        </S.TitleBox>
        <S.NotificationBox>
          <Text typography="t5" bold="regular">
            이벤트
          </Text>
          <S.Notifications>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
            <S.NotificationItem>
              <Text typography="t7" bold="regular">
                선착순 쿠폰을 뿌립니다 가져가라!
              </Text>
              <Text typography="t8" bold="thin" color="gray500">
                1분 전
              </Text>
            </S.NotificationItem>
          </S.Notifications>
        </S.NotificationBox>
      </S.Outline>
    </S.ModalContainer>
  );
};

export default Notification;
