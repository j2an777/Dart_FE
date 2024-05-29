import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import AlertPortal from './components/AlertPortal.tsx';


async function enableMocking() {
  if (import.meta.env.VITE_REACT_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/worker');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}
enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <App />
        <AlertPortal />
      </BrowserRouter>
    </React.StrictMode>,
  ),
);
