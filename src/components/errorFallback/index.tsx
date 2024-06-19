import error from '@/assets/images/error.png';
import { Button } from '..';

import * as S from './styles';

interface ErrorFallbackProps {
  onReset: () => void;
}

const ErrorFallback = ({ onReset }: ErrorFallbackProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <img src={error} />
        <S.Description typography="t4" color="gray400">
          정보를 불러오는데 실패했습니다.
        </S.Description>
      </S.TextBox>
      <Button bold="bold" onClick={onReset}>
        재시도
      </Button>
    </S.Container>
  );
};

export default ErrorFallback;
