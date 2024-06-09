const decodedToekn = (accessToekn: string) => {
  const base64Url = accessToekn.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
  const decoded = JSON.parse(jsonPayload);
  const { email, nickname, profileImage } = decoded;
  return { email, nickname, profileImage };
};

export default decodedToekn;
