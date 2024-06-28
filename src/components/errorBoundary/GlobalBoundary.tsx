import { PropsWithChildren, useEffect } from 'react';

const GlobalErrorBoundary = ({ children }: PropsWithChildren) => {
  const captureReject = (e: any) => {
    e.preventDefault();
    if (e.reason instanceof Error) {
      console.log(e.reason, 'in errorbuondary');
    }
  };

  useEffect(() => {
    window.addEventListener('unhandledrejection', captureReject);
    return () => window.removeEventListener('unhandledrejection', captureReject);
  }, []);

  return <div>{children}</div>;
};

export default GlobalErrorBoundary;
