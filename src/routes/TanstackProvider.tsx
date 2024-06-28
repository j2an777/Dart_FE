import useCustomNavigate from '@/hooks/useCustomNavigate';
import useOnError from '@/hooks/useOnError';
import { alertStore } from '@/stores/modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';

const TanstackProvider = ({ children }: PropsWithChildren) => {
  const open = alertStore((state) => state.open);
  const navigate = useCustomNavigate();

  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => useOnError({ error, open, navigate }),
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
