import { useEffect, useState } from 'react';
import getInputFieldOptions from '@/utils/getInputFieldOptions';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import * as S from './styles';

interface InputFieldProps {
  label: string;
  value: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
  disabled?: boolean;
}

const InputField = ({
  label,
  value,
  register,
  error,
  disabled = false,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isBlind, setIsBlind] = useState<boolean>(true);

  const inputOptions = getInputFieldOptions(value, isBlind);

  useEffect(() => {
    if (value === 'email' || value === 'nickname') {
      setIsFocused(true);
    }
  }, [value]);
  return (
    <S.Container>
      <S.Label htmlFor={value} children={label} isFocused={isFocused} />
      <S.Input
        id={value}
        {...register}
        {...inputOptions}
        autoFocus={value === 'email' || value === 'nickname' ? true : false}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (e.target.value === '') {
            setIsFocused(false);
          }
        }}
        disabled={disabled}
      />
      {value.includes('password') && (
        <S.BlindIcon
          value="blind"
          onClick={() => setIsBlind((prev) => !prev)}
          color={isBlind ? 'white' : 'green'}
        />
      )}
      {error && (
        <S.ErrorMessage color="red" typography="t6">
          {error?.message}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default InputField;
