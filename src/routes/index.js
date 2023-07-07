import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminDashboard from '../pages/Admin';
import SignUpPage from '../pages/SignUp';
import LoginPage from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    children: [
      {
        path: '',
        element: <AdminDashboard />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'users',
        element: <div>Admin Users</div>,
      },
      {
        path: 'products',
        element: <div>Admin Products</div>,
      },
      {
        path: 'orders',
        element: <div>Admin Orders</div>,
      },
      {
        path: 'categories',
        element: <div>Admin Categories</div>,
      },
    ],
  },
]);

export default router;
