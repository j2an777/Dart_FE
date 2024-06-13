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

export type EditFormData = Partial<
  Pick<SignupFormData, 'nickname' | 'password' | 'introduce'>
> & {
  profileImage?: File;
};

export type PutFormData = Partial<
  Pick<EditFormData, 'nickname' | 'introduce' | 'profileImage'>
>;

export interface ExtendedSignupForm extends SignupFormData {
  passwordConfirm: string;
}

export type LoginFormData = Pick<SignupFormData, 'email' | 'password'>;
