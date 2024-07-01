import { UserCircle } from '@/components';
import Text from '@/components/Text';
import { ChatMessageResponse } from '@/types/chat';
// import useCustomNavigate from '@/hooks/useCustomNavigate';
// import { chatStore } from '@/stores/modal';
import * as S from './styles';

const Message = ({
  sender,
  profileImageUrl,
  content,
  isAuthor,
}: Omit<ChatMessageResponse, 'createdAt'>) => {
  // const navigate = useCustomNavigate();
  // const close = chatStore((state) => state.close);

  return (
    <S.ChatBox isAuthor={isAuthor}>
      <S.SenderBlock
        isAuthor={isAuthor}
        onClick={() => {
          // close();
          // navigate(`/member/${sender}`);
        }}
      >
        {!isAuthor && <UserCircle size={30} profileImage={profileImageUrl} />}
        <Text typography="t6" bold="regular" color="gray500">
          {sender}
        </Text>
        {isAuthor && <UserCircle size={30} profileImage={profileImageUrl} />}
      </S.SenderBlock>
      <Text typography="t6" bold="regular" color="gray600">
        {content}
      </Text>
    </S.ChatBox>
  );
};

export default Message;
