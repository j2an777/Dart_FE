import { PropsWithChildren, useEffect } from 'react';

const GlobalErrorBoundary = ({ children }: PropsWithChildren) => {
  const captureReject = (e) => {
    e.preventDefault();
    if (e.reason instanceof Error) {
      console.log(e.reason);
    }
  };

  useEffect(() => {
    window.addEventListener('unhandledrejection', captureReject);
    return () => window.removeEventListener('unhandledrejection', captureReject);
  }, []);

  return <div>{children}</div>;
};

export default GlobalErrorBoundary;
