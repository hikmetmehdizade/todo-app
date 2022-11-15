import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LogInPage = lazy(() => import('../../pages/auth/AuthPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={'Loading...'}>
        <LogInPage />
      </Suspense>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
