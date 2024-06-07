import { useForm } from 'react-hook-form';
import { defaultValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/member';
import useGetSearchParams from '@/hooks/useGetSearchParams';
import {
  SignupAgree,
  SignupButtons,
  SignupEssentailForm,
  SignupOptionalForm,
  TitleNumber,
} from './components';

import * as S from './styles';
import { postSignup } from '@/apis/member';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const page = useGetSearchParams('page');
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ExtendedSignupForm>({
    mode: 'onChange',
    defaultValues,
  });
  const onSubmit = async (data: ExtendedSignupForm) => {
    const isAgree = sessionStorage.getItem('isAgree') === 'true';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirm, ...formData } = data;
    const newForm = { ...formData, isAgree };
    await postSignup(newForm).then(() => {
      reset();
      navigate('/login');
      sessionStorage.removeItem('isAgree');
    });
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
        <S.SignupFormBox>
          <SignupEssentailForm
            errors={errors}
            register={register}
            watch={watch}
            setValue={setValue}
          />
          <SignupOptionalForm errors={errors} register={register} />
        </S.SignupFormBox>
      ) : (
        <SignupAgree />
      )}
      <SignupButtons page={page ?? '1'} />
    </S.Container>
  );
};

export default SignupPage;
