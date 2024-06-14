import { PropsWithChildren } from 'react';

import * as S from './styles';

const NoneData = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );
};

export default NoneData;
