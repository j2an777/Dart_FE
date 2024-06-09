export type Member = Pick<SignupFormData, 'email' | 'nickname'>;

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

export type EditFormData = Partial<Pick<
  SignupFormData, 'email' | 'birthday' | 'nickname' | 'introduce'>> & {
    profileImage: FileList | string;
};

export type PutFormData = Partial<Pick<EditFormData, 'nickname' | 'introduce' | 'profileImage'>>;

export interface ExtendedSignupForm extends SignupFormData {
  checkPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
