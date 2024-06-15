import { Timer } from '..';
import { useInput } from '@/hooks/useInput';
import { useEffect, useState } from 'react';
import { ExtendedSignupForm } from '@/types/member';
import { Button, CircleLoader, InputField } from '@/components';
import usePostEmailVerify from '../../hooks/usePostEmailVerify';
import usePostNicknameCheck from '../../hooks/usePostNicknameCheck';
import usePostEmailCodeSend from '../../hooks/usePostEmailCodeSend';
import { RegisterOptions, UseFormSetValue, useForm } from 'react-hook-form';

import * as S from './styles';

interface SignupCheckProps {
  setValue: UseFormSetValue<ExtendedSignupForm>;
  label: string;
  value: string;
  registerOptions: RegisterOptions;
  buttonLabel: string;
  successMessage: string;
}

const SignupCheck = ({
  setValue,
  label,
  value,
  registerOptions,
  buttonLabel,
  successMessage,
}: SignupCheckProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<{ [key: string]: string }>({
    mode: 'onChange',
    defaultValues: { [value]: '' },
  });
  const { mutate: emailCodeSend, isSuccess, isPending } = usePostEmailCodeSend();
  const { mutate: nicknameCheck } = usePostNicknameCheck({ setValue });
  const onSubmit = async (form: { [key: string]: string }) => {
    const value = Object.keys(form)[0];
    if (value === 'email') {
      emailCodeSend(form as { email: string });
    } else {
      nicknameCheck(form as { nickname: string });
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
        disabled={isSuccess}
      />
      <Button
        buttonType="reverseRectangleGray"
        size="sm"
        type="submit"
        disabled={isSuccess}
        $active={!isSuccess}
      >
        {buttonLabel}
      </Button>
      {isSuccess && <S.SuccessText typography="t7">{successMessage}</S.SuccessText>}
      {isSuccess && (
        <CheckInputBox
          email={getValues('email')}
          setValue={setValue}
          viewTimer={isSuccess}
        />
      )}
      {isPending && <CircleLoader />}
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
  const { mutate: emailVerify, isSuccess, isError } = usePostEmailVerify({ setValue });
  useEffect(() => {
    if (isSuccess) setMessage('인증 완료');
    if (isError) setMessage('올바르지 않은 인증번호입니다');
  }, [isError, isSuccess]);
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
        onClick={() => emailVerify({ code: form.code, email })}
      >
        인증
      </Button>
    </S.CheckInputBox>
  );
};

export default SignupCheck;
