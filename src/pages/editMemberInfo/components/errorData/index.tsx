import { Button } from '@/components';
import * as S from './styles';
import error from '@/assets/images/error.png';

interface ErrorDataProps {
    retry: () => void;
}

const ErrorData = ({ retry }: ErrorDataProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <img src={error} alt='오류 이미지'/>
        <S.Description typography="t4" color="gray400">
          정보를 불러오는데 실패했습니다.<br/>
          재시도를 누르시거나 다시 로그인을 해주세요.
        </S.Description>
      </S.TextBox>
      <Button bold="bold" onClick={retry}>
        재시도
      </Button>
    </S.Container>
  )
}

export default ErrorData