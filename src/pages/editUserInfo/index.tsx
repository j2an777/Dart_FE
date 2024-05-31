import * as S from './styles';
import EditUserHeader from './components/editUserHeader';
import EditUserForm from './components/editUserForm';

const EditUserInfoPage = () => {
  return (
    <S.Container>
      <S.Block>
        <EditUserHeader />
        <EditUserForm />
      </S.Block>
    </S.Container>
  );
};

export default EditUserInfoPage;
