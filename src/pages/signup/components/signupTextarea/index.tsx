import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import * as S from './styles';

interface SignupTextareaProps {
  value: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

const SignupTextarea = ({ value, register }: SignupTextareaProps) => {
  return (
    <S.Textarea
      {...register}
      name={value}
      placeholder="자기 소개글 (최대 50자)"
      maxLength={50}
    />
  );
};

export default SignupTextarea;
// 이거 수정 가능할 듯!
