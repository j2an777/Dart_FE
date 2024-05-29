import { SignupValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/user';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import * as S from './styles';

interface SignupTextareaProps {
  value: SignupValues;
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  registerOptions?: object;
}

const SignupTextarea = ({ value, register, registerOptions }: SignupTextareaProps) => {
  return (
    <S.Textarea
      {...register(value, registerOptions)}
      name={value}
      placeholder="자기 소개글 (최대 50자)"
      maxLength={50}
    />
  );
};

export default SignupTextarea;
