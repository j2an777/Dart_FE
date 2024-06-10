import { Info, Menu } from './components';
import * as S from './styles';

const MemberInfoPage = () => {
  return (
    <S.Container>
      <S.Box>
        <S.TopBlock />
        <S.Block>
          <Info />
          <Menu />
        </S.Block>
      </S.Box>
    </S.Container>
  );
};

export default MemberInfoPage;
