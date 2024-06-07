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

export interface Member {
  email: string;
  nickname: string;
  profileImage: string;
  age: Date;
  bank: string;
  account: string;
  introduce: string;
}

export type EditFormData = Partial<
  Pick<SignupFormData, 'nickname' | 'password' | 'bank' | 'account' | 'introduce'>
> & {
  profileImage?: string;
};

export interface ExtendedSignupForm extends SignupFormData {
  passwordConfirm: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
