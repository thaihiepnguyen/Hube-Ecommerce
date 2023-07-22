import React, {useState} from 'react';
import SideBar from './components/SideBar';
import Dashboard from './Dashboard';
import styles from './styles.module.scss';
import Account from './Account';
import Shop from './Shop';

const HomePage = () => {
  const url = window.location.href;
  const urlSplit = url.split('/');
  const endPoint = urlSplit[urlSplit.length - 1];
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.content}>
        {endPoint === '' && <Dashboard />}
        {endPoint === 'dashboard' && <Dashboard />}
        {endPoint === 'account' && <Account />}
        {endPoint === 'shop' && <Shop />}
      </div>
    </div>
  )
}

export default HomePage;