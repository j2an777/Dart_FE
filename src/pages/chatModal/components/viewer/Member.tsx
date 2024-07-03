import Text from '@/components/Text';
import { UserCircle } from '@/components';
import * as S from './styles';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { chatStore } from '@/stores/modal';

interface Props {
  name: string;
  profileImageUrl: string;
}
const Member = ({ name, profileImageUrl }: Props) => {
  const navigate = useCustomNavigate();
  const close = chatStore((state) => state.close);
  return (
    <S.Box>
      <S.Block
        onClick={() => {
          close();
          navigate(`/member/${name}`);
        }}
      >
        <UserCircle size={40} profileImage={profileImageUrl} />
        <Text typography="t6" color="gray600">
          {name}
        </Text>
      </S.Block>

      <S.Circle />
    </S.Box>
  );
};

export default Member;
