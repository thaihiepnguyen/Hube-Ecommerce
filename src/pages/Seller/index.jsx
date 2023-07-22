import React, {useState} from 'react';
import SideBar from './components/SideBar';
import Dashboard from './Dashboard';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.content}>
        <Dashboard/>
      </div>
    </div>
  )
}

export default HomePage;