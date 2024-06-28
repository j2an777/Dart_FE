import { Timer } from '..';
import { useEffect, useState } from 'react';
import { Button, CircleLoader, InputField } from '@/components';
import usePostEmailVerify from '../../hooks/usePostEmailVerify';
import { useForm } from 'react-hook-form';
import usePostCheckEmailOrNickname, {
  SignupCheckData,
} from '../../hooks/usePostCheckEmailOrNickname';

import * as S from './styles';

export interface SignupCheckProps {
  label: string;
  value: 'email' | 'nickname';
  buttonLabel: string;
  successMessage: string;
}

const SignupCheck = ({ label, value, buttonLabel, successMessage }: SignupCheckProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignupCheckData>({
    mode: 'onChange',
    defaultValues: { [`${value}`]: '' },
  });
  const { mutate, isPending, isSuccess } = usePostCheckEmailOrNickname({
    value,
  });
  const onSubmit = async (form: SignupCheckData) => mutate(form);
  return (
    <S.Container>
      <S.InputBox>
        <InputField
          register={register(value, {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '이메일 형식을 지켜주세요',
            },
          })}
          error={errors[value]}
          label={label}
          value={value}
          disabled={isSuccess}
        />
        <Button
          buttonType="reverseRectangleGray"
          size="sm"
          type="submit"
          disabled={isSuccess}
          $active={!isSuccess}
          onClick={handleSubmit(onSubmit)}
        >
          {buttonLabel}
        </Button>
      </S.InputBox>
      {isSuccess && <S.SuccessText typography="t7">{successMessage}</S.SuccessText>}
      {value === 'email' && (
        <CheckInputBox email={getValues('email')} isVisible={isSuccess} />
      )}
      {isPending && <CircleLoader />}
    </S.Container>
  );
};

const CheckInputBox = ({ email, isVisible }: { email: string; isVisible: boolean }) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<{ email: string; code: string }>({
    defaultValues: { email, code: '' },
    mode: 'onChange',
  });
  const [message, setMessage] = useState<string>('올바르지 않은 인증번호입니다');
  const { mutate: emailVerify, isSuccess, isError } = usePostEmailVerify();
  useEffect(() => {
    if (isSuccess) setMessage('인증 완료');
    if (isError) setMessage('올바르지 않은 인증번호입니다');
  }, [isError, isSuccess]);
  return (
    <S.CheckInputBox isVisible={isVisible}>
      {isVisible && !message && (
        <S.TimerBox>
          <Timer />
        </S.TimerBox>
      )}
      <InputField
        register={register('code')}
        label="코드 입력"
        value="code"
        error={errors.code}
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
        onClick={() => emailVerify({ email, code: getValues('code') })}
      >
        인증
      </Button>
    </S.CheckInputBox>
  );
};

export default SignupCheck;
