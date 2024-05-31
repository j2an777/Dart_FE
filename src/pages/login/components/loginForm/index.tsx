import { useForm } from 'react-hook-form';
import { InputField } from '@/components';
import { LoginFormData } from '@/types/member';
import LoginLinkButton from '../loginLinkButton';
import { loginButtons, loginFormData } from '@/consts/login';

import * as S from './styles';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <S.Container>
      <div>
        {loginFormData.map(({ label, registerOptions, value }) => (
          <InputField
            key={value}
            register={register(value, registerOptions)}
            label={label}
            value={value}
            error={errors[value]}
          />
        ))}
      </div>
      <S.ButtonBox>
        {loginButtons.map((props, index) => (
          <LoginLinkButton key={index} {...props} />
        ))}
        <S.SubmitIcon value="arrow" onClick={handleSubmit(onSubmit)} />
      </S.ButtonBox>
    </S.Container>
  );
};

export default LoginForm;
