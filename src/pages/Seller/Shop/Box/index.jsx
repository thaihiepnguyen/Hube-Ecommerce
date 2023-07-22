import React, {useState} from 'react';
import styles from './styles.module.scss';

const Box = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.note}>{props.note}</div>
            <input type="text" placeholder="Enter something..."></input>
        </div>
    )
}

export default Box;