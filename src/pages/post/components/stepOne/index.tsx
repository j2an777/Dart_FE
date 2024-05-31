import TextBox from '@/components/textBox';
import InputBox from '@/components/inputBox';
import * as S from './styles';

const StepOne = () => {
  return (
    <S.Container>
      <S.Step>01</S.Step>
      <S.Block>
        <InputBox placeholder="작품명을 입력해 주세요." width={750} />
        <InputBox placeholder="해시태그를 입력해 주세요." width={750} />
        <TextBox placeholder="작품 소개를 입력해 주세요." height={200} />
      </S.Block>
    </S.Container>
  );
};

export default StepOne;
