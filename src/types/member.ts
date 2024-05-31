export interface Member {}

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

export interface ExtendedSignupForm extends SignupFormData {
  checkPassword: string;
}
