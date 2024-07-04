import { essentiolFormData, optionalFormData } from '@/consts/signup';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { SignupFormLayout, SignupTextarea } from '..';
import { ExtendedSignupForm } from '@/types/member';
import { Button, InputField, Text } from '@/components';
import { checkModalStore } from '@/stores/modal';
import { Navigate } from 'react-router-dom';
import SignupCheck from '../signupCheck';
import { useEffect } from 'react';

import * as S from './styles';

const SignupForm = () => {
  const open = checkModalStore((state) => state.open);
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<ExtendedSignupForm>();

  useEffect(() => {
    return () => sessionStorage.removeItem('isAgree');
  }, []);

  // if (!sessionStorage.getItem('isAgree')) return <Navigate to={'/'} />;
  return (
    <S.Container>
      <SignupFormLayout title="필수">
        {essentiolFormData.map(
          ({
            value,
            label,
            checkOption = { buttonLabel: '', successMessage: '' },
            registerOptions,
            ...props
          }) => {
            if (value === 'email' || value === 'nickname') {
              return (
                <InputField
                  key={value}
                  register={register(value, registerOptions)}
                  error={errors[value]}
                  label={label}
                  value={value}
                  disabled
                  buttonLabel={value === 'email' ? '인증번호 발송' : '중복 확인'}
                  onClickButton={() =>
                    open({
                      title: props.title,
                      content: (
                        <SignupCheck
                          label={label}
                          value={value}
                          registerOptions={registerOptions as RegisterOptions}
                          {...checkOption}
                        />
                      ),
                    })
                  }
                />
              );
            }
            if (value === 'passwordConfirm') {
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
          },
        )}
      </SignupFormLayout>
      <SignupFormLayout title="선택">
        {optionalFormData.map(({ type, value, label, registerOptions }) => {
          if (type === 'input') {
            return (
              <InputField
                key={value}
                register={register(value, registerOptions)}
                label={label}
                value={value}
                error={errors[value]}
              />
            );
          } else {
            return (
              <SignupTextarea key={value} register={register(value)} value={value} />
            );
          }
        })}
      </SignupFormLayout>
    </S.Container>
  );
};

export default SignupForm;
