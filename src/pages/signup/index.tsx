import { SignupButtons, SignupForm, TitleNumber } from './components';
import useGetSearchParams from '@/hooks/useGetSearchParams';
import { useForm } from 'react-hook-form';
import { defaultValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/user';

import * as S from './styles';

const SignupPage = () => {
  const page = useGetSearchParams('page');
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExtendedSignupForm>({
    mode: 'onChange',
    defaultValues,
  });
  const onSubmit = (data: ExtendedSignupForm) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkPassword, ...formData } = data;
    console.log(formData);
  };
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.TitleBox>
        <TitleNumber page={page ?? '1'} />
        <S.Title color="white" typography="t0" bold="regular">
          회원가입
        </S.Title>
      </S.TitleBox>
      {page === '2' ? (
        <SignupForm errors={errors} register={register} watch={watch} />
      ) : (
        <>이용약관</>
      )}
      <SignupButtons page={page ?? '1'} />
    </S.Container>
  );
};

export default SignupPage;
