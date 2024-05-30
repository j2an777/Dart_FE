import { InputArea, SignupFormLayout } from '..';
import { Button } from '@/components';
import { ExtendedSignupForm } from '@/types/member';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { SignupValues, essentiolFormData } from '@/consts/signup';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
}

const SignupEssentailForm = ({ watch, ...props }: SignupFormProps) => {
  return (
    <SignupFormLayout title="필수">
      {essentiolFormData.map(({ value, registerOptions, label }) => {
        if (value === 'email' || value === 'nickname') {
          return (
            <S.CheckBox key={value}>
              <InputArea
                {...props}
                label={label}
                registerOptions={registerOptions}
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
            <InputArea
              key={value}
              {...props}
              label={label}
              value={value}
              registerOptions={{
                ...registerOptions,
                validate: (value: string) =>
                  watch().password !== value ? '비밀번호가 일치하지 않습니다' : true,
              }}
            />
          );
        }
        return (
          <InputArea
            key={value}
            {...props}
            label={label}
            value={value as SignupValues}
            registerOptions={registerOptions}
          />
        );
      })}
    </SignupFormLayout>
  );
};

export default SignupEssentailForm;
