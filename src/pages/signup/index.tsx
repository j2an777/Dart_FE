import { useForm } from 'react-hook-form';
import { postSignup } from '@/apis/member';
import { defaultValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import useGetSearchParams from '@/hooks/useGetSearchParams';
import {
  SignupAgree,
  SignupButtons,
  SignupEssentailForm,
  SignupOptionalForm,
  TitleNumber,
} from './components';

import * as S from './styles';
import { alertStore } from '@/stores/modal';

const SignupPage = () => {
  const page = useGetSearchParams('page');
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirm, ...formData } = data;
    await postSignup(formData).then(() => {
      reset();
      open({
        title: '회원가입 완료',
        description: '로그인 페이지로 이동하시겠습니까?',
        onClickButton: () => {
          navigate('/login');
        },
      });
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
