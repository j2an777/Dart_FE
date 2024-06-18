import { Icon, Text } from '..';

import * as S from './styles';

const NoneData = ({ content }: { content: string }) => {
  return (
    <S.Container>
      <Icon value="mainLogo" $active={false} color="gray400" />
      <Text typography="t5" color="gray400">
        {content}
      </Text>
    </S.Container>
  );
};

export default NoneData;
