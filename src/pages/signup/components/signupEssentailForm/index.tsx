import { SignupFormLayout } from '..';
import { Button, InputField } from '@/components';
import { ExtendedSignupForm } from '@/types/member';
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { essentiolFormData } from '@/consts/signup';
import { Navigate } from 'react-router-dom';
import { alertStore } from '@/stores/modal';
import SignupCheck from '../signupCheck';

import * as S from './styles';
import { useEffect } from 'react';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
  setValue: UseFormSetValue<ExtendedSignupForm>;
}

const SignupEssentailForm = ({ watch, register, errors, setValue }: SignupFormProps) => {
  const open = alertStore((state) => state.open);
  useEffect(() => {
    return () => sessionStorage.removeItem('isAgree');
  }, []);
  const isAgree = sessionStorage.getItem('isAgree');
  if (!isAgree) return <Navigate to={'/'} />;

  return (
    <SignupFormLayout title="필수">
      {essentiolFormData.map(({ value, label, ...props }) => {
        if (value === 'email' || value === 'nickname') {
          return (
            <S.CheckBox key={value}>
              <InputField
                register={register(value, props.registerOptions)}
                error={errors[value]}
                label={label}
                value={value}
                disabled
              />
              <Button
                size="smMd"
                buttonType="reverseRectangleWhite"
                type="button"
                onClick={() =>
                  open({
                    title: props.title,
                    buttonLabel: '닫기',
                    description: (
                      <SignupCheck
                        setValue={setValue}
                        label={label}
                        value={value}
                        registerOptions={props.registerOptions as RegisterOptions}
                      />
                    ),
                  })
                }
              >
                {value === 'email' ? '인증번호 발송' : '중복 확인'}
              </Button>
            </S.CheckBox>
          );
        }
        if (value === 'passwordConfirm') {
          return (
            <InputField
              key={value}
              register={register(value, {
                ...props.registerOptions,
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
            register={register(value, props.registerOptions)}
            error={errors[value]}
          />
        );
      })}
    </SignupFormLayout>
  );
};

export default SignupEssentailForm;
