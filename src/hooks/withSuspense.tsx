// import { FetchBoundary } from '@/components';
import { ComponentType, ReactNode, Suspense } from 'react';

const withSuspense = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  options: { suspenseFallback: ReactNode },
  // options: { suspenseFallback: ReactNode; erroBoundaryFallback: ReactNode },
) => {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.suspenseFallback}>
        {/* <FetchBoundary fallback={options.erroBoundaryFallback}> */}
        <WrappedComponent {...(props as Props)} />
        {/* </FetchBoundary> */}
      </Suspense>
    );
  };
};

export default withSuspense;
