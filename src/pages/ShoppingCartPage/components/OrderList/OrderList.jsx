import React from 'react';
import styles from './styles.module.scss';
import ProductImg from '../../../../../src/assets/product_img.png'
import OrderItem from '../OrderItem/OrderItem';
import TabNav from '../../../../assets/tab_nav.svg'
import {Search} from '@material-ui/icons';

const menuItems = [
    {
      shop_name: 'TEELAB SHOP',
      status: 'VẬN CHUYỂN',
      product_img: ProductImg,
      product_title: 'Áo TEE Local Brand TEELAB | 2023 Version'
    },
    {
        shop_name: 'TEELAB SHOP',
        status: 'VẬN CHUYỂN',
        product_img: ProductImg,
        product_title: 'Áo TEE Local Brand TEELAB | 2023 Version'
    },
    {
      shop_name: 'TEELAB SHOP',
      status: 'VẬN CHUYỂN',
      product_img: ProductImg,
      product_title: 'Áo TEE Local Brand TEELAB | 2023 Version'
    }
];
  

const OrderList = props => {
    return <>
      <div className={styles.tab_nav_container}>
        <img src={TabNav} alt="Logo" />
      </div>
      <div className={styles.search_section}>
        <div className={styles.searchContainer}>
            <input
              className={styles.inputStyle}
              placeholder={' Tìm kiếm đơn hàng...'}
            />
          <Search className={styles.searchStyle} />
        </div>
      </div>
      {
        menuItems.map((item, index) => (
          <OrderItem
             key={index}
             shop_name={item.shop_name}
             status={item.status}
             product_img={item.product_img}
             product_title={item.product_title}
             clickViewDetailBtn={props.clickViewDetailBtn}
      />
     )) 
      }
    </>
}

export default OrderList;