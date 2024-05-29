import { useState } from 'react';
import * as S from './styles';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ExtendedSignupForm } from '@/types/user';
import { SignupValues } from '@/consts/signup';
import getInputAreaOptions from '@/utils/getInputAreaOptions';

interface InputAreaProps {
  label: string;
  value: SignupValues;
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  registerOptions?: object;
}

const InputArea = ({
  label,
  value,
  register,
  errors,
  registerOptions,
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
