import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUp';
import LoginPage from '../pages/Login';
import AdminPage from '../pages/Admin';
import ProductDetailPage from '../pages/ProductDetailPage';
import AccountPage from "../pages/AccountPage";
import SearchPage from "../pages/SearchPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import Seller from "../pages/Seller";

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
    element: <AccountPage />,
  },
  {
    path: '/cart/:userId',
    element: <AccountPage />,
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
    element: <ProductDetailPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'checkout',
    element: <CheckoutPage />,
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
      },
    ],
  },
]);

export default router;
