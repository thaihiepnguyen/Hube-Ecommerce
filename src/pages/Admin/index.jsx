import React from 'react';
import styles from './style.module.scss';
import SideBar from '../../components/SideBar';
import AdminDashboard from './Dashboard';
import UserManagement from './UserManagement';
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';
import CategoryManagement from './CategoryManagement';
import DiscountManagement from './DiscountManagement';

const AdminPage = () => {
  const url = window.location.href;
  const urlSplit = url.split('/');
  const endPoint = urlSplit[urlSplit.length - 1];

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        {(endPoint === 'dashboard' || endPoint === 'admin') && (
          <AdminDashboard />
        )}
        {endPoint === 'products' && <ProductManagement />}
        {endPoint === 'orders' && <OrderManagement />}
        {endPoint === 'users' && <UserManagement />}
        {endPoint === 'categories' && <CategoryManagement />}
        {endPoint === 'discounts' && <DiscountManagement />}
      </div>
    </div>
  );
};

export default AdminPage;
