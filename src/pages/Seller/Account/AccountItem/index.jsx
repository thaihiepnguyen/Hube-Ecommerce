import React, {useState} from 'react';
import styles from './styles.module.scss';

const AccountItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {props.title}
            </div>
            <input className={styles.content} readOnly={props.readOnly} value={props.content} ref={props.refs}></input>
        </div>
    )
}

export default AccountItem;