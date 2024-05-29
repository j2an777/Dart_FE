import { InputArea, SignupFormLayout, SignupTextarea } from '..';
import { Button } from '@/components';
import { ExtendedSignupForm } from '@/types/user';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import {
  SignupValues,
  essentiolFormData,
  optionalFormData,
  signupFormType,
} from '@/consts/signup';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
}

const SignupForm = ({ watch, ...props }: SignupFormProps) => {
  const renderForm = (title: string) => {
    switch (title) {
      case '필수':
        return (
          <>
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
                    <Button size="smMd" buttonType="reverseRectangleWhite">
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
                        watch().password !== value
                          ? '비밀번호가 일치하지 않습니다'
                          : true,
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
          </>
        );
      case '선택':
        return (
          <>
            {optionalFormData.map(
              ({ type, items, label, value, registerOptions }, index) => {
                if (type === 'input') {
                  return (
                    <InputArea
                      key={index}
                      {...props}
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
                          {...props}
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
                      {...props}
                      value={value as SignupValues}
                    />
                  );
                }
              },
            )}
          </>
        );
    }
  };

  return (
    <S.Container>
      {signupFormType.map((title) => (
        <SignupFormLayout key={title} title={title}>
          {renderForm(title)}
        </SignupFormLayout>
      ))}
    </S.Container>
  );
};

export default SignupForm;
