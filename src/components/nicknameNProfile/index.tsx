import { Text, UserCircle } from '..';
import { TextProps } from '../Text';

import * as S from './styles';

interface NicknameNProfileProps extends TextProps {
  nickname: string;
  profileSize?: number;
  profileImage?: string | null;
}

const NicknameNProfile = ({
  profileSize = 15,
  profileImage,
  nickname,
  ...props
}: NicknameNProfileProps) => {
  return (
    <S.Container>
      <UserCircle size={profileSize} profileImage={profileImage} />
      <Text {...props}>{nickname}</Text>
    </S.Container>
  );
};

export default NicknameNProfile;
