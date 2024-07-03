import { Icon } from '@/components';
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
      <S.HeaderTitle>
        회원정보 수정
      </S.HeaderTitle>
    </S.Container>
  );
};

export default EditMemberHeader;
