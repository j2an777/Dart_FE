import Text from '@/components/Text';
import * as S from './styles';
import DropZone from '@/components/dropZone';

const StepTwo = () => {
  return (
    <S.Container>
      <S.Step>02</S.Step>
      <S.Block>
        <Text typography="t5" bold="regular">
          작품 리스트(최대 20개)
        </Text>
        <S.BorderLine />
        <DropZone />
      </S.Block>
    </S.Container>
  );
};

export default StepTwo;
