import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUp';
import LoginPage from '../pages/Login';
import AdminPage from '../pages/Admin';
import ProfilePage from "../pages/ProfilePage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import Seller from '../pages/Seller';
import Account from '../pages/Seller/Account';
import ProductDetailPage from "../pages/ProductDetailPage";
import SearchPage from '../pages/SearchPage';

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
    path: 'products/:id',
    element: <ProductDetailPage/>
  },
  {
    path: 'search',
    element: <SearchPage/>
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
      }
    ],
  },
  {
    path: '/seller',
    children: [
      {
        path: '',
        element: <Seller />,
      },
      {
        path: 'dashboard',
        element: <Seller />,
      },
      {
        path: 'account',
        element: <Seller />,
      },
      {
        path: 'shop',
        element: <Seller />,
      }
    ],
  },
]);

export default router;
