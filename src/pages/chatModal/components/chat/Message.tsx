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

export default Message;
