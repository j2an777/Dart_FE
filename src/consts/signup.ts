import { ExtendedSignupForm } from '@/types/member';
import { RegisterOptions } from 'react-hook-form';

interface FormField {
  label: string;
  title?: string;
  value: keyof ExtendedSignupForm;
  registerOptions?: RegisterOptions;
  type?: 'input' | 'textarea';
}

export const essentiolFormData: FormField[] = [
  {
    label: '이메일',
    value: 'email',
    title: '이메일 검증',
    registerOptions: {
      required: '이메일을 입력해주세요',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: '이메일 형식을 지켜주세요',
      },
    },
  },
  {
    label: '닉네임',
    value: 'nickname',
    title: '닉네임 중복 검사',
    registerOptions: {
      required: '닉네임을 입력해주세요',
      pattern: {
        value: /^[가-힣a-zA-Z0-9]{1,10}$/,
        message: '한글 영문 조합 10자 이내',
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
  {
    label: '비밀번호 확인',
    value: 'passwordConfirm',
    registerOptions: {
      required: '비밀번호 혹인을 입력해주세요',
    },
  },
];

export const optionalFormData: FormField[] = [
  {
    label: '생년월일',
    value: 'birthday',
    type: 'input',
    registerOptions: {
      pattern: {
        value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
        message: 'YYYY-MM-DD 형식으로 작성해주세요',
      },
    },
  },
  {
    label: '자기 소개글',
    value: 'introduce',
    type: 'textarea',
  },
];

export const defaultValues = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',
  birthday: '',
  introduce: '',
  isCheckedNickname: false,
  isCheckedEmail: false,
};

export const signupFormType = ['필수', '선택'];
