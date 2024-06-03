import EditMemberForm from './components/editMemberForm';
import EditMemberHeader from './components/editMemberHeader';
import * as S from './styles';

const EditMemberInfoPage = () => {
  return (
    <S.Container>
      <S.Block>
        <EditMemberHeader />
        <EditMemberForm />
      </S.Block>
    </S.Container>
  );
};

export default EditMemberInfoPage;
