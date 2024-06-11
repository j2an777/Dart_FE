import { Text } from '@/components';
import Card from '../motion';
import * as S from './styles';

const SuccessPage = () => {
  return (
    <div>
      <Card emoji={'완료'} key={'emoji'} />
      <S.Container>
        <Text>결제 완료</Text>
      </S.Container>
    </div>
  );
};

export default SuccessPage;
