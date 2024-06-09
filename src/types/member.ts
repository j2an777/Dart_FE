export interface SignupFormData {
  isAgree: boolean;
  email: string;
  nickname: string;
  password: string;
  birthday?: string;
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

export type PutFormData = Partial<Pick<EditFormData, 'nickname' | 'introduce' | 'profileImage'>>;

export interface ExtendedSignupForm extends SignupFormData {
  passwordConfirm: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
