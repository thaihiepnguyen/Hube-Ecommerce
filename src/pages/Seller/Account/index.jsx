import React, {useState} from 'react';
import styles from './styles.module.scss';
import AccountItem from './AccountItem';

const Account = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Account</div>
            <AccountItem title="Account" content="trannguyenphongg@gmail.com"/>
            <AccountItem title="ID Account" content="00001"/>
            <AccountItem title="Password" content="goodseller"/>
        </div>
    )
}
export default Account;