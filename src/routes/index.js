import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUp';
import LoginPage from '../pages/Login';
import AdminPage from '../pages/Admin';
import ProfilePage from "../pages/ProfilePage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

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
    path: '/profile/:userId',
    element: <ProfilePage />,
  },
  {
    path: '/cart/:userId',
    element: <ShoppingCartPage/>
  },
  {
    path: '/settings',
    element: <HomePage />,
  },
  {
    path: '/help',
    element: <HomePage />,
  },
  {
    path: '/access',
    element: <HomePage />,
  },

  {
    path: '/admin',
    children: [
      {
        path: '',
        element: <AdminPage />,
      },
      {
        path: 'dashboard',
        element: <AdminPage />,
      },
      {
        path: 'users',
        element: <AdminPage />,
      },
      {
        path: 'products',
        element: <AdminPage />,
      },
      {
        path: 'orders',
        element: <AdminPage />,
      },
      {
        path: 'categories',
        element: <AdminPage />,
      },
      {
        path: 'discounts',
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
