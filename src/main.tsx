import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.ts';
import {
  AlertPortal,
  ChatPortal,
  GalleryDetailPortal,
  NotificationPortal,
} from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <ChatPortal />
      <GalleryDetailPortal />
      <NotificationPortal />
      <AlertPortal />
      <App />
    </BrowserRouter>
  </React.Fragment>,
);
