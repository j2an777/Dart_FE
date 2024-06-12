import { Text } from '@/components';
import Card from '../motion';
import * as S from './styles';

const FailPage = () => {
  return (
    <div>
      <Card emoji={'실패'} key={'emoji'} />
      <S.Container>
        <Text>결제 실패</Text>
      </S.Container>
    </div>
  );
};

export default FailPage;
