import { InputBox, TextBox } from '../../styles';
import { useFormContext, Controller } from 'react-hook-form';
import * as S from './styles';

const StepOne = () => {
  const { control } = useFormContext();
  return (
    <S.Container>
      <S.Step>01</S.Step>
      <S.Block>
        <Controller
          name="title"
          control={control}
          rules={{ required: '작품명을 입력해 주세요.' }}
          render={({ field }) => (
            <InputBox placeholder="작품명을 입력해 주세요." width={750} {...field} />
          )}
        />
        <Controller
          name="hashtag"
          control={control}
          rules={{ required: '해시태그를 입력해 주세요.' }}
          render={({ field }) => (
            <InputBox placeholder="해시태그를 입력해 주세요." width={750} {...field} />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: '작품 소개를 입력해 주세요.' }}
          render={({ field }) => (
            <TextBox placeholder="작품 소개를 입력해 주세요." height={200} {...field} />
          )}
        />
      </S.Block>
    </S.Container>
  );
};

export default StepOne;
