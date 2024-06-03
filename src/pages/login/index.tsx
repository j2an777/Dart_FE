import { LoginForm, LoginLayout, SocialButtons } from './components';

import * as S from './styles';

const LoginPage = () => {
  return (
    <S.Container>
      <LoginLayout>
        <LoginForm />
        <SocialButtons />
      </LoginLayout>
    </S.Container>
  );
};

export default LoginPage;
