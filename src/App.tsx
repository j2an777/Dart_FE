import { Route, Routes } from 'react-router-dom';
import { GlobalBoundary, Navbar } from '@/components';
import { routes } from './routes';
import ProtectedRoute from './routes/ProtectedRoute';
import TanstackProvider from './routes/TanstackProvider';

declare global {
  interface Window { Kakao: any; }
  interface Window { daum: any; }
}

function App() {
  return (
    <TanstackProvider>
      <GlobalBoundary>
        <Routes>
          {routes.map(({ Element, path, withNav, withAuth }) => {
            const elemet = withAuth ? (
              <ProtectedRoute path={path}>
                <Element />
              </ProtectedRoute>
            ) : (
              <Element />
            );
            if (withNav) {
              return (
                <Route key={path} path="/" element={<Navbar />}>
                  <Route path={path} element={elemet} />
                </Route>
              );
            }
            return <Route key={path} path={path} element={elemet} />;
          })}
        </Routes>
      </GlobalBoundary>
    </TanstackProvider>
  );
}

export default App;
