import { SignupValues } from '@/consts/signup';

const getInputAreaOptions = (value: SignupValues) => {
  const type = value === 'password' || value === 'checkPassword' ? 'password' : 'text';
  const autoComplete =
    value === 'email' || value === 'nickname'
      ? 'username'
      : value === 'password' || value === 'checkPassword'
        ? 'new-password'
        : null;
  return autoComplete ? { type, autoComplete } : { type };
};

export default getInputAreaOptions;
