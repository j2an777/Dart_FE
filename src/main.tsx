import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import { AlertPortal, NotificationPortal } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <AlertPortal />
      <NotificationPortal />
      <App />
    </BrowserRouter>
  </React.Fragment>,
);
