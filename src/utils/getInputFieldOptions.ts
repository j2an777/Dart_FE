const getInputFieldOptions = (value: string, isBlind: boolean) => {
  const type =
    (value === 'password' && isBlind) || (value === 'passwordConfirm' && isBlind)
      ? 'password'
      : 'text';
  const autoComplete =
    value === 'email' || value === 'nickname'
      ? 'username'
      : value === 'password' || value === 'passwordConfirm'
        ? 'new-password'
        : null;
  return autoComplete ? { type, autoComplete } : { type };
};

export default getInputFieldOptions;
