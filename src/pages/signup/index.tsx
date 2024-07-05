import { defaultValues } from '@/consts/signup';
import usePostSingup from './hooks/usePostSingup';
import { ExtendedSignupForm } from '@/types/member';
import { FormProvider, useForm } from 'react-hook-form';
import useGetSearchParams from '@/hooks/useGetSearchParams';
import { CircleLoader, SignupCheckPortal } from '@/components';
import { SignupAgree, SignupButtons, SignupForm, TitleNumber } from './components';

import * as S from './styles';

const SignupPage = () => {
  const page = useGetSearchParams('page');
  const methods = useForm<ExtendedSignupForm>({
    mode: 'onChange',
    defaultValues,
  });
  const { mutate: signup, isPending } = usePostSingup({ reset: () => methods.reset() });
  const onSubmit = async (data: ExtendedSignupForm) => {
    const { passwordConfirm, ...formData } = data;
    signup(formData);
  };

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={methods.handleSubmit(onSubmit)}>
        <S.SignupBox>
          <S.TitleBlock>
            <TitleNumber page={page ?? '1'} />
            <S.Title color="white" typography="t0" bold="regular">
              회원가입
            </S.Title>
          </S.TitleBlock>
          {page === '2' ? <SignupForm /> : <SignupAgree />}
          <SignupButtons page={page ?? '1'} />
        </S.SignupBox>
      </S.Container>
      {isPending && <CircleLoader />}
      <SignupCheckPortal />
    </FormProvider>
  );
};

export default SignupPage;
