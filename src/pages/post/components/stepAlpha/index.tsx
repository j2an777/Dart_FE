import * as S from './styles';
import { Address } from '..';

const StepAlpha = () => {
  return (
    <S.Container>
      <S.Step value="alpha" $active={false} />
      <S.Box>
        <Address />
      </S.Box>
    </S.Container>
  );
};

export default StepAlpha;
