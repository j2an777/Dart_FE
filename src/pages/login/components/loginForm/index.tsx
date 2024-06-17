import { useForm } from 'react-hook-form';
import { Icon, InputField } from '@/components';
import useLogin from '../../hooks/usePostLogin';
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
  const { mutate: Login, isPending } = useLogin();
  const onSubmit = (data: LoginFormData) => Login(data);

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
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
        <S.SubmitButton type="submit">
          <Icon value="arrow" $active={!isPending} />
        </S.SubmitButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default LoginForm;
