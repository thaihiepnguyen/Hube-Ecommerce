import React from 'react';
import styles from './styles.module.scss';
import AddIcon from '../../../../../src/assets/addIcon.png'

const Avatar = (props) => {
    return (
        <div className={styles.avatar}>
            <img src={props.imgURI} alt="Avatar" />
            {
            props.edit === false ? 
                <img className={styles.addIcon} src={AddIcon} alt="addBtn" /> : ''
            }
        </div>
    )
}

export default Avatar;