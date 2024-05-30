import { useState } from 'react';
import { SignupValues } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/member';
import getInputAreaOptions from '@/utils/getInputAreaOptions';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import * as S from './styles';

interface InputAreaProps {
  label: string;
  value: SignupValues;
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  registerOptions?: object;
  readonly?: boolean;
  onClick?: () => void;
}

const InputArea = ({
  label,
  value,
  register,
  errors,
  registerOptions,
  ...props
}: InputAreaProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const options = getInputAreaOptions(value);
  return (
    <S.Container>
      <S.Label htmlFor={value} children={label} isFocused={isFocused} />
      <S.Input
        {...register(value, registerOptions)}
        {...options}
        id={value}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (e.target.value === '') {
            setIsFocused(false);
          }
        }}
        {...props}
      />
      {errors[value] && (
        <S.ErrorMessage color="red" typography="t6">
          {errors[value]?.message}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default InputArea;
