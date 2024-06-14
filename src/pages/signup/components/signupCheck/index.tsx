import { postCheckNickname, postEmailCode, postEmailVerify } from '@/apis/member';
import { RegisterOptions, UseFormSetValue, useForm } from 'react-hook-form';
import { ExtendedSignupForm } from '@/types/member';
import { Button, CircleLoader, InputField } from '@/components';
import { useInput } from '@/hooks/useInput';
import { useState } from 'react';

import * as S from './styles';
import { Timer } from '..';

const SignupCheck = ({
  setValue,
  label,
  value,
  registerOptions,
  buttonLabel,
  successMessage,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
  label: string;
  value: string;
  registerOptions: RegisterOptions;
  buttonLabel: string;
  successMessage: string;
}) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    getValues,
  } = useForm<{ [key: string]: string }>({
    mode: 'onChange',
    defaultValues: { [value]: '' },
  });
  const [isView, setIsView] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (form: { [key: string]: string }) => {
    setIsLoading(true);
    const value = Object.keys(form)[0];
    try {
      if (value === 'email') {
        await postEmailCode(form as { email: string }).then(() => setIsView(true));
      } else {
        await postCheckNickname(form as { nickname: string }).then(() =>
          setValue('nickname', form.nickname, { shouldValidate: true }),
        );
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register(value, registerOptions)}
        error={errors[value]}
        label={label}
        value={value}
        inputType="alert"
        disabled={isView}
      />
      <Button
        buttonType="reverseRectangleGray"
        size="sm"
        type="submit"
        disabled={isView}
        $active={!isView}
      >
        {buttonLabel}
      </Button>
      {isSubmitSuccessful && (
        <S.SuccessText typography="t7">{successMessage}</S.SuccessText>
      )}
      {isView && (
        <CheckInputBox
          email={getValues('email')}
          setValue={setValue}
          viewTimer={isSubmitSuccessful}
        />
      )}
      {isLoading && <CircleLoader />}
    </S.Container>
  );
};

const CheckInputBox = ({
  email,
  setValue,
  viewTimer,
}: {
  email: string;
  setValue: UseFormSetValue<ExtendedSignupForm>;
  viewTimer: boolean;
}) => {
  const [form, onChange] = useInput({ code: '' });
  const [message, setMessage] = useState<string>('');
  const onClickVerifyEmail = async () => {
    await postEmailVerify({ code: form.code, email }).then(() => {
      setValue('email', email, { shouldValidate: true });
    });
  };
  return (
    <S.CheckInputBox>
      {viewTimer && !message && <Timer />}
      <S.CheckModalInput
        name="code"
        placeholder="코드 입력"
        value={form.code}
        onChange={onChange}
      />
      {message && (
        <S.CheckModalMessage
          typography="t7"
          color={message === '인증 완료' ? 'green' : 'red'}
        >
          {message}
        </S.CheckModalMessage>
      )}
      <Button
        buttonType="reverseRectangleGray"
        size="sm"
        type="button"
        onClick={() =>
          onClickVerifyEmail()
            .then(() => setMessage('인증 완료'))
            .catch(() => setMessage('올바르지 않은 인증번호입니다'))
        }
      >
        인증
      </Button>
    </S.CheckInputBox>
  );
};

export default SignupCheck;
