import Text from '@/components/Text';
import { UserCircle } from '@/components';
import * as S from './styles';

interface Props {
  name: string;
  profileImage: string;
}
const Item = ({ name, profileImage }: Props) => {
  return (
    <S.Box>
      <UserCircle size={40} profileImage={profileImage} />
      <Text typography="t6" color="gray600">
        {name}
      </Text>
    </S.Box>
  );
};

const Viewer = () => {
  return (
    <S.Container>
      {Array.from({ length: 20 }).map((_, index) => (
        <Item key={index} name={`user ${index}`} profileImage={'defaultImage'} />
      ))}
    </S.Container>
  );
};

export default Viewer;
