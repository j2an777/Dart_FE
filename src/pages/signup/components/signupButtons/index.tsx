import { Button } from '@/components';
import { agreeStore } from '@/stores/agree';

import * as S from './styles';
import useCustomNavigate from '@/hooks/useCustomNavigate';

interface SignupButtonsProps {
  page: string | null;
}

const SignupButtons = ({ page }: SignupButtonsProps) => {
  const navigate = useCustomNavigate();
  const allChecked = agreeStore((state) => state.allChecked);
  return (
    <S.Container>
      <Button
        size="lg"
        buttonType="rectangleGray"
        bold="regular"
        type="button"
        onClick={() => navigate(-1)}
      >
        {page === '1' ? '취소' : '이전'}
      </Button>
      {page === '1' ? (
        <Button
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
        </Button>
      ) : (
        <Button size="lg" buttonType="rectangleWhite" bold="regular" type="submit">
          완료
        </Button>
      )}
    </S.Container>
  );
};

export default SignupButtons;
