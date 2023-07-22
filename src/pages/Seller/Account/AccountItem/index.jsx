import React, {useState} from 'react';
import styles from './styles.module.scss';

const AccountItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.content}>{props.content}</div>
        </div>
    )
}

export default AccountItem;