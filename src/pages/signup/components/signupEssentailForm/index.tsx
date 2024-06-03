import { SignupFormLayout } from '..';
import { Button, InputField } from '@/components';
import { ExtendedSignupForm } from '@/types/member';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { essentiolFormData } from '@/consts/signup';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
}

const SignupEssentailForm = ({ watch, register, errors }: SignupFormProps) => {
  return (
    <SignupFormLayout title="필수">
      {essentiolFormData.map(({ value, registerOptions, label }) => {
        if (value === 'email' || value === 'nickname') {
          return (
            <S.CheckBox key={value}>
              <InputField
                register={register(value, registerOptions)}
                error={errors[value]}
                label={label}
                value={value}
              />
              <Button size="smMd" buttonType="reverseRectangleWhite" type="button">
                {value === 'email' ? '인증번호 발송' : '중복 확인'}
              </Button>
            </S.CheckBox>
          );
        }
        if (value === 'checkPassword') {
          return (
            <InputField
              key={value}
              register={register(value, {
                ...registerOptions,
                validate: (value: string) =>
                  watch().password !== value ? '비밀번호가 일치하지 않습니다' : true,
              })}
              error={errors[value]}
              label={label}
              value={value}
            />
          );
        }
        return (
          <InputField
            key={value}
            label={label}
            value={value}
            register={register(value, registerOptions)}
            error={errors[value]}
          />
        );
      })}
    </SignupFormLayout>
  );
};

export default SignupEssentailForm;
