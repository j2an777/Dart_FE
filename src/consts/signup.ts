interface EssentialBaseFormField {
  label: string;
  value: SignupValues;
}

interface RegisterOptions {
  required: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

interface EssentialFormField extends EssentialBaseFormField {
  registerOptions: RegisterOptions;
}

export const essentiolFormData: EssentialFormField[] = [
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
    label: '닉네임',
    value: 'nickname',
    registerOptions: {
      required: '닉네임을 입력해주세요',
      pattern: {
        value: /^[A-Za-z가-힣]{1,10}$/,
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
    value: 'checkPassword',
    registerOptions: {
      required: '비밀번호 혹인을 입력해주세요',
    },
  },
];

export const optionalFormData = [
  {
    label: '생년월일',
    value: 'age',
    type: 'input',
    registerOptions: {
      pattern: {
        value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
        message: 'YYYY-MM-DD 형식으로 작성해주세요',
      },
    },
  },
  {
    type: 'bankBox',
    items: [
      {
        label: '은행명',
        value: 'bank',
      },
      {
        label: '계좌정보',
        value: 'account',
      },
    ],
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
  checkPassword: '',
  age: '',
  bank: '',
  account: '',
  introduce: '',
};

export const signupFormType = ['필수', '선택'];

export type SignupValues = keyof typeof defaultValues;
