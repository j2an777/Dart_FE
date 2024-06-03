import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import AlertPortal from './components/AlertPortal.tsx';
import GlobalErrorBoundary from './routes/GlobalErrorBoundary.tsx';
import { ErrorPage } from './pages/index.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

async function enableMocking() {
  if (import.meta.env.VITE_REACT_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/worker');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}
const queryClient = new QueryClient();

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Global styles={globalStyles} />
      <GlobalErrorBoundary fallback={ErrorPage}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
            <AlertPortal />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </GlobalErrorBoundary>
    </React.StrictMode>,
  ),
);
