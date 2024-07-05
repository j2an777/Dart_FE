const hasInvited = () => {
  const getExpiration = () => {
    const now = new Date();
    return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  };

  const items = {
    invited: true,
    expiration: getExpiration(),
  };
  const setInvited = localStorage.setItem('invited', JSON.stringify(items));

  return { setInvited };
};

export default hasInvited;
