import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthLayouts } from '../../layouts';

const LogInPage = lazy(() => import('../../pages/auth/AuthPage'));
const WorkspacePage = lazy(
  () => import('../../pages/workspaces/WorkspacesPage')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={'Loading...'}>
        <LogInPage />
      </Suspense>
    ),
  },
  {
    path: '/workspaces',
    element: (
      <Suspense>
        <AuthLayouts>
          <WorkspacePage />
        </AuthLayouts>
      </Suspense>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
