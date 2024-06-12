import { Text } from '@/components';
import { PropsWithChildren } from 'react';

import * as S from './styles';

const SignupFormLayout = ({ children, title }: PropsWithChildren<{ title: string }>) => {
  return (
    <S.Container>
      <Text color="white" typography="t1" bold="regular">
        {title}
      </Text>
      {children}
    </S.Container>
  );
};

export default SignupFormLayout;
