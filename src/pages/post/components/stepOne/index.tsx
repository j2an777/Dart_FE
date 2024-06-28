import { useFormContext, Controller } from 'react-hook-form';
import * as S from './styles';
import { InputBox, TextBox } from '../inputs/styles';
import TagsInput from '../inputs/TagsInput';
import { TextCounter } from '@/components';

const StepOne = () => {
  const { control } = useFormContext();

  return (
    <S.Container>
      <S.Step value="step_one" $active={false} />
      <S.Block>
        <Controller
          name="gallery.title"
          control={control}
          rules={{
            required: '전시 제목을 입력해 주세요.',
            maxLength: { value: 12, message: '20자 이내로 입력해 주세요.' },
          }}
          render={({ field }) => (
            <InputBox
              placeholder="전시 제목을 입력해 주세요."
              width={750}
              maxLength={12}
              {...field}
            />
          )}
        />
        <TagsInput name="gallery.hashtags" />
        <Controller
          name="gallery.content"
          control={control}
          rules={{
            required: '전시 소개를 입력해 주세요.',
            maxLength: { value: 250, message: '250자 이내로 입력해 주세요.' },
          }}
          render={({ field }) => (
            <>
              <TextBox
                placeholder="전시 소개를 입력해 주세요."
                height={200}
                maxLength={250}
                {...field}
              />
              <S.Box>
                <TextCounter textLength={field.value?.length ?? 0} maxLength={250} />
              </S.Box>
            </>
          )}
        />
      </S.Block>
    </S.Container>
  );
};

export default StepOne;
