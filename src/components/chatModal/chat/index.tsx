import { useEffect, useRef } from 'react';
import Icon from '@/components/icon';
import { UserCircle } from '@/components';
import Text from '@/components/Text';
import * as S from './styles';

interface Props {
  name: string;
  profileImage: string;
  content: string;
}
const Message = ({ name, profileImage, content }: Props) => {
  return (
    <S.ChatBox>
      <section>
        <UserCircle size={30} profileImage={profileImage} />
        <Text typography="t6" bold="regular" color="gray500">
          {name}
        </Text>
      </section>
      <Text typography="t6" bold="regular" color="gray600">
        {content}
      </Text>
    </S.ChatBox>
  );
};

const Chat = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  // 첫 마운트
  useEffect(() => {
    scrollToBottom();
  }, []);

  // 메세지 추가될 때
  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <S.Container>
      <S.ContentBox ref={ref}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Message
            key={index}
            name={`user ${index}`}
            profileImage={'defaultImage'}
            content={'안녕하세요. 전시가 멋져요.'}
          />
        ))}
      </S.ContentBox>

      <S.InputBox>
        <S.Input placeholder="채팅 입력" />
        <Icon value="send" />
      </S.InputBox>
    </S.Container>
  );
};

export default Chat;
