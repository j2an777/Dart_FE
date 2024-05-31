import { ExtendedSignupForm } from '@/types/member';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputArea, SignupFormLayout, SignupTextarea } from '..';
import { SignupValues, optionalFormData } from '@/consts/signup';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
}

const SignupOptionalForm = ({ ...registerNerrors }: SignupFormProps) => {
  return (
    <SignupFormLayout title="선택">
      {optionalFormData.map(({ type, items, label, value, registerOptions }, index) => {
        if (type === 'input') {
          return (
            <InputArea
              key={index}
              {...registerNerrors}
              value={value as SignupValues}
              label={label as string}
              registerOptions={registerOptions}
            />
          );
        } else if (type === 'bankBox') {
          return (
            <S.BankBox key={index}>
              {items?.map(({ value, label }) => (
                <InputArea
                  key={value}
                  {...registerNerrors}
                  value={value as SignupValues}
                  label={label}
                />
              ))}
            </S.BankBox>
          );
        } else {
          return (
            <SignupTextarea
              key={index}
              {...registerNerrors}
              value={value as SignupValues}
            />
          );
        }
      })}
    </SignupFormLayout>
  );
};

export default SignupOptionalForm;
