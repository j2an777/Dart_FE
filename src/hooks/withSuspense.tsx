import { ApiErrorBoundary } from '@/components';
import { ComponentType, ReactNode, Suspense } from 'react';

const withSuspense = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  options: { suspenseFallback: ReactNode; erroBoundaryFallback: ReactNode },
) => {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.suspenseFallback}>
        <ApiErrorBoundary fallback={options.erroBoundaryFallback}>
          <WrappedComponent {...(props as Props)} />
        </ApiErrorBoundary>
      </Suspense>
    );
  };
};

export default withSuspense;
