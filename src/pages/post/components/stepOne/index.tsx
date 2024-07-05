import { useFormContext, Controller } from 'react-hook-form';
import { TextBox } from '../inputs/styles';
import TagsInput from '../inputs/TagsInput';
import { Text, TextCounter } from '@/components';
import * as S from './styles';

const StepOne = () => {
  const { control } = useFormContext();

  return (
    <S.Container>
      <S.Step value="step_one" $active={false} />
      <Text>전시 정보를 작성해주세요.</Text>
      <S.Block>
        <Controller
          name="gallery.title"
          control={control}
          rules={{
            required: '전시 제목을 입력해 주세요.',
            maxLength: { value: 30, message: '30자 이내로 입력해 주세요.' },
          }}
          render={({ field }) => (
            <S.StyledInputBox
              placeholder="전시 제목을 입력해 주세요."
              maxLength={30}
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
