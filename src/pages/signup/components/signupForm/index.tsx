import { SignupFormLayout, SignupTextarea } from '..';
import { Button, InputField } from '@/components';
import { ExtendedSignupForm } from '@/types/member';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { essentiolFormData, optionalFormData } from '@/consts/signup';
import { checkModalStore } from '@/stores/modal';
import { Navigate } from 'react-router-dom';
import SignupCheck from '../signupCheck';
import { useEffect } from 'react';

import * as S from './styles';

const SignupForm = () => {
  const open = checkModalStore((state) => state.open);
  useEffect(() => {
    return () => sessionStorage.removeItem('isAgree');
  }, []);
  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<ExtendedSignupForm>();
  if (!sessionStorage.getItem('isAgree')) return <Navigate to={'/'} />;
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
                <S.CheckBox key={value}>
                  <InputField
                    register={register(value, registerOptions)}
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
                        content: (
                          <SignupCheck
                            label={label}
                            value={value}
                            setValue={setValue}
                            registerOptions={registerOptions as RegisterOptions}
                            {...checkOption}
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
