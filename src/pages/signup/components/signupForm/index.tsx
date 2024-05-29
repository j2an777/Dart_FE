import { InputArea } from '..';
import { Button, Text } from '@/components';
import { ExtendedSignupForm } from '@/types/user';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { SignupValues, essentiolFormData } from '@/consts/signup';

import * as S from './styles';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
}

const SignupForm = ({ watch, ...props }: SignupFormProps) => {
  return (
    <S.Container>
      <S.FormBox>
        <Text color="white" typography="t1" bold="regular">
          필수
        </Text>
        {essentiolFormData.map(({ value, registerOptions, label }, index) => {
          if (value === 'email' || value === 'nickname') {
            return (
              <S.CheckBlock key={index}>
                <InputArea
                  {...props}
                  label={label}
                  registerOptions={registerOptions}
                  value={value}
                />
                <Button size="smMd" buttonType="reverseRectangleWhite">
                  {value === 'email' ? '인증번호 발송' : '중복 확인'}
                </Button>
              </S.CheckBlock>
            );
          }
          if (value === 'checkPassword') {
            return (
              <InputArea
                key={index}
                {...props}
                label={label}
                registerOptions={{
                  ...registerOptions,
                  validate: (value: string) =>
                    watch().password !== value ? '비밀번호가 일치하지 않습니다' : true,
                }}
                value={value}
              />
            );
          }
          return (
            <InputArea
              key={index}
              {...props}
              label={label}
              registerOptions={registerOptions}
              value={value as SignupValues}
            />
          );
        })}
      </S.FormBox>
      <S.FormBox>
        <Text color="white" typography="t1" bold="regular">
          선택
        </Text>
        <InputArea {...props} value="age" label="나이" />
        <InputArea {...props} value="bank" label="은행명" />
        <InputArea {...props} value="account" label="계좌정보" />
      </S.FormBox>
    </S.Container>
  );
};

export default SignupForm;
