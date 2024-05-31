import { PropsWithChildren } from 'react';
import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const LoginLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.WhyNotImg />
      <S.GetInImg />
      <S.Header>
        <S.BackIcon value="halfArrow" onClick={() => navigate(-1)} />
        <Icon value="logo" $active={false} />
      </S.Header>
      {children}
    </S.Container>
  );
};

export default LoginLayout;
