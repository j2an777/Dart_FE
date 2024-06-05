import { memberStore } from '@/stores/member';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, path }: PropsWithChildren<{ path: string }>) {
  const isLogin = !!memberStore((state) => state.accessToken);

  if (path === '/login' || path === '/signup') {
    return isLogin ? <Navigate to={'/'} /> : (children as JSX.Element);
  }
  return isLogin ? (children as JSX.Element) : <Navigate to={'/login'} />;
}

export default ProtectedRoute;
