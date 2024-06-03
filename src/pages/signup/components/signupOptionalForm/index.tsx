import { InputField } from '@/components';
import { SignupFormLayout, SignupTextarea } from '..';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { optionalFormData } from '@/consts/signup';
import { ExtendedSignupForm } from '@/types/member';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
}

const SignupOptionalForm = ({ register, errors }: SignupFormProps) => {
  return (
    <SignupFormLayout title="선택">
      {optionalFormData.map((form, index) => {
        if (form.type === 'input') {
          return (
            <InputField
              key={index}
              register={register(form.value, form.registerOptions)}
              label={form.label}
              value={form.value}
              error={errors[form.value]}
            />
          );
        } else if (form.type === 'bankBox') {
          return (
            <S.BankBox key={index}>
              {form.items?.map(({ value, label }) => (
                <InputField
                  key={value}
                  register={register(value)}
                  label={label}
                  value={value}
                />
              ))}
            </S.BankBox>
          );
        } else {
          return (
            <SignupTextarea
              key={index}
              register={register(form.value)}
              value={form.value}
            />
          );
        }
      })}
    </SignupFormLayout>
  );
};

export default SignupOptionalForm;
