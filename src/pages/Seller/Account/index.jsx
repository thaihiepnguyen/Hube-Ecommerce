import React, {useState, useRef} from 'react';
import styles from './styles.module.scss';
import AccountItem from './AccountItem';
import Avatar from './Avatar';
import AvatarImg from '../../../assets/avatar1.png';
import Button from '../../../../src/components/Button'

const Account = () => {
    const focus = useRef();
    const [editBtnText, setEditBtnText] = useState('Edit');
    const [editBtnColor, setEditBtnColor] = useState('#026afb');
    const [edit, setEditBtn] = useState(true);
    const clickEditBtn = () => {
        setEditBtn(!edit);
        if (editBtnText === 'Edit') {
            setEditBtnText('Save');
            setEditBtnColor('#006600');
            // console.log(focus.current);
            focus.current.focus();
        }
        else { 
            setEditBtnColor('#026afb');
            setEditBtnText('Edit');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Account</div>
            <Avatar imgURI={AvatarImg} edit={edit}/>
            <AccountItem title="Account" content="trannguyenphongg@gmail.com" readOnly={edit} refs={focus}/>
            <AccountItem title="ID Account" content="00001" readOnly="true"/>
            <AccountItem title="Password" content="goodseller" readOnly={edit} focus={edit}/>
            <Button
                backgroundColor={editBtnColor}
                buttonClassName={styles.editBtn}
                textColor="#fff" 
                onClick={clickEditBtn} >
                {editBtnText}
            </Button>
        </div>
    )
}
export default Account;