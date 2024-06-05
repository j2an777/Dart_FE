export type Member = Pick<SignupFormData, 'email' | 'nickname'>;

export interface SignupFormData {
  isAgree: boolean;
  email: string;
  nickname: string;
  password: string;
  age?: string;
  bank?: string;
  account?: string;
  introduce?: string;
}

export type EditFormData = Partial<Pick<
  SignupFormData, 'nickname' | 'password' | 'bank' | 'account' | 'introduce'>> & {
    profileImage?: string;
};

export interface ExtendedSignupForm extends SignupFormData {
  checkPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
