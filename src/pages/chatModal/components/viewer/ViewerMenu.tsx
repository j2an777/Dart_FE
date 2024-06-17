import Member from './Member';
import * as S from './styles';

const ViewerMenu = () => {
  return (
    <S.Container>
      {Array.from({ length: 20 }).map((_, index) => (
        <Member key={index} name={`user ${index}`} profileImage={'defaultImage'} />
      ))}
    </S.Container>
  );
};

export default ViewerMenu;
