import { Text } from '@/components';
import * as S from './styles';

const TitleNumber = ({ page }: { page: string | null }) => {
  return (
    <S.Container>
      <S.BackgroundBox />
      <Text typography="t0" color="white" bold="regular">
        {page}
      </Text>
    </S.Container>
  );
};

export default TitleNumber;
