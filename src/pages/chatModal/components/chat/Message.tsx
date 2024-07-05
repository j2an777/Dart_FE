import { UserCircle } from '@/components';
import Text from '@/components/Text';
import { ChatMessageProps } from '@/types/chat';
import * as S from './styles';
import { memberStore } from '@/stores/member';

const Message = ({
  sender,
  profileImageUrl,
  content,
  isAuthor,
}: Omit<ChatMessageProps, 'createdAt'>) => {
  const nickname = memberStore((state) => state.auth.nickname);
  const isMine = sender == nickname ? true : false;
  return (
    <S.ChatBox isMine={isMine} isAuthor={isAuthor}>
      <S.SenderBlock isMine={isMine} isAuthor={isAuthor}>
        <Text typography="t6" bold="regular" color="gray600">
          {sender}
        </Text>
        <UserCircle size={30} profileImage={profileImageUrl} />
      </S.SenderBlock>
      <Text typography="t6" bold="regular" color="gray600">
        {content}
      </Text>
    </S.ChatBox>
  );
};

export default Message;
