import { FormProvider, useForm } from 'react-hook-form';
import { defaultValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/member';
import useGetSearchParams from '@/hooks/useGetSearchParams';
import { SignupAgree, SignupButtons, SignupForm, TitleNumber } from './components';

import * as S from './styles';
import usePostSingup from './hooks/usePostSingup';

const SignupPage = () => {
  const page = useGetSearchParams('page');
  const methods = useForm<ExtendedSignupForm>({
    mode: 'onChange',
    defaultValues,
  });
  const { mutate: signup } = usePostSingup({ reset: () => methods.reset() });
  const onSubmit = async (data: ExtendedSignupForm) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirm, ...formData } = data;
    signup(formData);
  };
  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={methods.handleSubmit(onSubmit)}>
        <S.TitleBox>
          <TitleNumber page={page ?? '1'} />
          <S.Title color="white" typography="t0" bold="regular">
            회원가입
          </S.Title>
        </S.TitleBox>
        {page === '2' ? <SignupForm /> : <SignupAgree />}
        <SignupButtons page={page ?? '1'} />
      </S.Container>
    </FormProvider>
  );
};

export default SignupPage;
