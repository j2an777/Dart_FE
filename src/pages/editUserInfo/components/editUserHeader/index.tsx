import { Icon, Text } from '@/components';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const EditUserHeader = () => {
  const navigate = useNavigate();

  const onHandleBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.BackBox onClick={onHandleBack}>
        <Icon value='back' size={20} />
      </S.BackBox>
      <Text typography='t2' bold='bold'>회원정보 수정</Text>
    </S.Container>
  )
}

export default EditUserHeader