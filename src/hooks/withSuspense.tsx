import { ComponentType, ReactNode, Suspense } from 'react';

const withSuspense = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  options: { fallback: ReactNode },
) => {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.fallback}>
        <WrappedComponent {...(props as Props)} />
      </Suspense>
    );
  };
};

export default withSuspense;
