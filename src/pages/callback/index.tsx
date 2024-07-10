import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePostSocialLogin from './hooks/usePostSocialLogin';

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session-id');
  const { mutate: login } = usePostSocialLogin(sessionId);
  useEffect(() => {
    login();
  }, []);
  return <div></div>;
};

export default CallbackPage;
