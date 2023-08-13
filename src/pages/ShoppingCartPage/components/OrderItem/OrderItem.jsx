import React, {useState, useRef} from 'react';
import styles from './styles.module.scss';
import Logo from '../../../../../src/assets/shop_logo.png'
import Button from '../Button/Button';

const OrderItem = props => {
    return (
        <div className={styles.container}>
            <div className={styles.title_section}>
                <div className={styles.name_section}>
                    <div><img src={Logo} alt="Logo"/></div>
                    <p className={styles.shop_name}>{props.shop_name}</p>
                </div>
                <p className={styles.status}>{props.status}</p>
            </div>
            <div className={styles.content_section}>
                <div className={styles.product_section}>
                    <img src={props.product_img} alt="Product img" className={styles.product_img}/> 
                    <div className={styles.product_content}>
                        <p className={styles.product_title}>{props.product_title}</p>
                        <p>Phân loại hàng: L</p>
                        <p>Số lượng: 1</p>
                    </div>
                    <div className={styles.price_section}>
                        <p>$10</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_section}>
                <div className={styles.total}>
                    <p>Thành tiền:</p>
                    <p>$12</p>
                </div>
                <div className={styles.button_section}>
                    <Button
                        backgroundColor="#DADADA"
                        buttonClassName={styles.btn}
                        textColor="#B414FF"
                        onClick={props.clickViewDetailBtn}>
                        Xem chi tiết
                    </Button>
                    
                    <Button
                        backgroundColor="#B414FF"
                        textColor="#fff"
                        buttonClassName={styles.btn}>
                        Huỷ đơn hàng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;