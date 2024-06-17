import Text from '@/components/Text';
import { UserCircle } from '@/components';
import * as S from './styles';

interface Props {
  name: string;
  profileImage: string;
}
const Member = ({ name, profileImage }: Props) => {
  return (
    <S.Box>
      <UserCircle size={40} profileImage={profileImage} />
      <Text typography="t6" color="gray600">
        {name}
      </Text>
    </S.Box>
  );
};

export default Member;
