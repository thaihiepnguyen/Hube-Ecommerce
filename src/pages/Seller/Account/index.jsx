import React, {useState} from 'react';
import styles from './styles.module.scss';
import AccountItem from './AccountItem';
import Avatar from './Avatar';
import Logo from '../../../assets/hube_logo.png';


const Account = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Account</div>
            <Avatar imgURI={Logo} />
            <AccountItem title="Account" content="trannguyenphongg@gmail.com"/>
            <AccountItem title="ID Account" content="00001"/>
            <AccountItem title="Password" content="goodseller"/>
        </div>
    )
}
export default Account;