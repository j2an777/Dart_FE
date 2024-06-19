export interface SignupFormData {
  email: string;
  nickname: string;
  password: string;
  introduce?: string;
  birthday?: string;
}

export interface Member {
  email: string;
  nickname: string;
  profileImage: string;
  birthday: Date;
  introduce: string;
}

export interface EmailVerify extends Pick<Member, 'email'> {
  code: string;
}

export type PutFormData = FormData;

export type EditFormData = Partial<
  Pick<Member, 'nickname' | 'introduce'>
> & {
  profileImage?: File;
  birthday: string;
};

export interface ExtendedSignupForm extends SignupFormData {
  passwordConfirm: string;
}

export type LoginFormData = Pick<SignupFormData, 'email' | 'password'>;
