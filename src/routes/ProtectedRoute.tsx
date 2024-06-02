import useGetUserInfo from '@/hooks/useGetUserInfo';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, path }: PropsWithChildren<{ path: string }>) {
  const { data: user } = useGetUserInfo();
  if (path === '/login' || path === '/signup') {
    return user ? <Navigate to={'/'} /> : (children as JSX.Element);
  }
  return user ? (children as JSX.Element) : <Navigate to={'/login'} />;
}

export default ProtectedRoute;
