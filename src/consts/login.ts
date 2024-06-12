import { LoginFormData } from '@/types/member';
import { RegisterOptions } from 'react-hook-form';

interface LoginFormField {
  label: string;
  value: keyof LoginFormData;
  registerOptions: RegisterOptions;
}

export const loginFormData: LoginFormField[] = [
  {
    label: '이메일',
    value: 'email',
    registerOptions: {
      required: '이메일을 입력해주세요',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: '이메일 형식을 지켜주세요',
      },
    },
  },
  {
    label: '비밀번호',
    value: 'password',
    registerOptions: {
      required: '비밀번호을 입력해주세요',
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        message: '영문, 숫자, 특수문자 조합 8자 이상',
      },
    },
  },
];

interface LoginButtonsType {
  title: string;
  buttonLabel: string;
  path: string;
}

export const loginButtons: LoginButtonsType[] = [
  {
    title: '계정이 없으세요?',
    buttonLabel: '회원가입',
    path: '/signup',
  },
  {
    title: '비밀번호를 잊으셨나요?',
    buttonLabel: '비밀번호 찾기',
    path: '', // 구현 예정인걸 나타내자
  },
];
