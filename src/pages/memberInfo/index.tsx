import useCustomNavigate from '@/hooks/useCustomNavigate';
import { Info, Menu } from './components';
import * as S from './styles';

const MemberInfoPage = () => {
  const navigate = useCustomNavigate();
  return (
    <S.Layout>
      <S.Container>
        <S.Box>
          <S.TopBlock />
          <S.Back value="cancel" onClick={() => navigate(-1)} />
          <S.Block>
            <Info />
            <Menu />
          </S.Block>
        </S.Box>
      </S.Container>
    </S.Layout>
  );
};

export default MemberInfoPage;
