import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
  if (import.meta.env.VITE_REACT_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/worker');

  return worker.start();
}
enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  ),
);
