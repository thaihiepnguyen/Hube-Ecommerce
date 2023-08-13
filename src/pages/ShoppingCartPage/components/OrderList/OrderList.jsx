import React from 'react';
import styles from './styles.module.scss';
import ProductImg from '../../../../../src/assets/product_img.png'
import OrderItem from '../OrderItem/OrderItem';

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