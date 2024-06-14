import { Icon, Text } from '@/components';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

const EditMemberHeader = () => {
  const navigate = useCustomNavigate();

  const onHandleBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.BackBox onClick={onHandleBack}>
        <Icon value="back" size={20} />
      </S.BackBox>
      <Text typography="t2" bold="bold">
        회원정보 수정
      </Text>
    </S.Container>
  );
};

export default EditMemberHeader;
