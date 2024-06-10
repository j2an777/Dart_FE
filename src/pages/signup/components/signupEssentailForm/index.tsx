import { SignupFormLayout } from '..';
import { Button, InputField } from '@/components';
import { ExtendedSignupForm } from '@/types/member';
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from 'react-hook-form';
import { essentiolFormData } from '@/consts/signup';
import { Navigate } from 'react-router-dom';
import { alertStore } from '@/stores/modal';

import * as S from './styles';
import { postCheckNickname, postEmailCode } from '@/apis/member';
import { useState } from 'react';

interface SignupFormProps {
  register: UseFormRegister<ExtendedSignupForm>;
  errors: FieldErrors<ExtendedSignupForm>;
  watch: UseFormWatch<ExtendedSignupForm>;
  setValue: UseFormSetValue<ExtendedSignupForm>;
}

const SignupEssentailForm = ({ watch, register, errors, setValue }: SignupFormProps) => {
  const open = alertStore((state) => state.open);
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
                      <CheckModal
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

const CheckModal = ({
  setValue,
  label,
  value,
  registerOptions,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
  label: string;
  value: string;
  registerOptions: RegisterOptions;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ [key: string]: string }>({
    mode: 'onChange',
    defaultValues: { [value]: '' },
  });
  const [isView, setIsView] = useState<boolean>(false);
  const onSubmit = async (form: { [key: string]: string }) => {
    const value = Object.keys(form)[0];
    if (value === 'email') {
      await postEmailCode(form as { email: string }).then(() => {
        setValue('email', form.email, { shouldValidate: true }), setIsView(true);
      });
    } else {
      await postCheckNickname(form as { nickname: string });
    }
  };
  return (
    <S.CheckModalContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register(value, registerOptions)}
        error={errors[value]}
        label={label}
        value={value}
        inputType="alert"
      />
      <Button buttonType="RoundBlack" size="sm" type="submit">
        확인버튼
      </Button>
      {isView && <>확인란</>}
    </S.CheckModalContainer>
  );
};
