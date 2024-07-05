import Card from '../components/motion';
import * as S from './styles';

const FailPage = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.PayText typography="t2" bold="bold">
          결제가 취소되었습니다.
        </S.PayText>
        <Card content={'메인으로'} path={'/'} key={'ticket'} />
      </S.Container>
    </S.Layout>
  );
};

export default FailPage;
