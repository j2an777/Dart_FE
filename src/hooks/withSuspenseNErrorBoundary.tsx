import { ErrorFallback, FetchBoundary } from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ComponentType, ReactNode, Suspense } from 'react';

const withSuspenseNErrorBoundary = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  options: { suspenseFallback: ReactNode },
) => {
  return (props: Props) => {
    return (
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <FetchBoundary fallback={ErrorFallback} onReset={reset}>
            <Suspense fallback={options.suspenseFallback}>
              <WrappedComponent {...(props as Props)} />
            </Suspense>
          </FetchBoundary>
        )}
      </QueryErrorResetBoundary>
    );
  };
};

export default withSuspenseNErrorBoundary;
