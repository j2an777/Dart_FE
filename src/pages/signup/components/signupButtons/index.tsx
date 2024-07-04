import { agreeStore } from '@/stores/agree';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

interface SignupButtonsProps {
  page: string | null;
}

const SignupButtons = ({ page }: SignupButtonsProps) => {
  const navigate = useCustomNavigate();
  const allChecked = agreeStore((state) => state.allChecked);
  return (
    <S.Container>
      <S.StyledButton
        size="lg"
        buttonType="rectangleGray"
        bold="regular"
        type="button"
        onClick={() => navigate(-1)}
      >
        {page === '1' ? '취소' : '이전'}
      </S.StyledButton>
      {page === '1' ? (
        <S.StyledButton
          size="lg"
          buttonType="rectangleWhite"
          bold="regular"
          type="button"
          onMouseDown={() => {
            sessionStorage.setItem('isAgree', JSON.stringify(true));
            navigate('/signup?page=2');
          }}
          disabled={!allChecked}
        >
          다음
        </S.StyledButton>
      ) : (
        <S.StyledButton
          size="lg"
          buttonType="rectangleWhite"
          bold="regular"
          type="submit"
        >
          완료
        </S.StyledButton>
      )}
    </S.Container>
  );
};

export default SignupButtons;
