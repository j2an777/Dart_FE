import { useFormContext, Controller } from 'react-hook-form';
import * as S from './styles';
import { InputBox, TextBox } from '../inputs/styles';
import TagsInput from '../inputs/TagsInput';

const StepOne = () => {
  const { control } = useFormContext();
  return (
    <S.Container>
      <S.Step>01</S.Step>
      <S.Block>
        <Controller
          name="gallery.title"
          control={control}
          rules={{ required: '작품명을 입력해 주세요.' }}
          render={({ field }) => (
            <InputBox placeholder="작품명을 입력해 주세요." width={750} {...field} />
          )}
        />
        <Controller
          name="gallery.hashtags"
          control={control}
          render={({ field }) => (
            <TagsInput value={field.value} onChange={field.onChange} />
          )}
        />
        <Controller
          name="gallery.content"
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
