import React, {useState} from 'react';
import styles from './styles.module.scss';

const Avatar = (props) => {
    return (
        <div className={styles.avatar}>
            <img src={props.imgURI} alt="Avatar" />
        </div>
    )
}

export default Avatar;