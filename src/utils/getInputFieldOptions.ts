const getInputFieldOptions = (value: string, isBlind: boolean) => {
  const type =
    (value === 'password' && isBlind) || (value === 'checkPassword' && isBlind)
      ? 'password'
      : 'text';
  const autoComplete =
    value === 'email' || value === 'nickname'
      ? 'username'
      : value === 'password' || value === 'checkPassword'
        ? 'new-password'
        : null;
  return autoComplete ? { type, autoComplete } : { type };
};

export default getInputFieldOptions;
