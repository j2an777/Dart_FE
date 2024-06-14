import { useForm } from 'react-hook-form';
import { InputField } from '@/components';
import { LoginFormData } from '@/types/member';
import LoginLinkButton from '../loginLinkButton';
import { loginButtons, loginFormData } from '@/consts/login';
import { postLogin } from '@/apis/member';
import { memberStore } from '@/stores/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();
  const setMember = memberStore((state) => state.setMember);
  const navigate = useCustomNavigate();
  const onSubmit = async (data: LoginFormData) => {
    await postLogin(data)
      .then(({ accessToken }) => {
        setMember(accessToken);
      })
      .then(() => navigate(-1));
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
