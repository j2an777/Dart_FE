import { Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components';
import { routes } from './routes';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
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
  );
}

export default App;
