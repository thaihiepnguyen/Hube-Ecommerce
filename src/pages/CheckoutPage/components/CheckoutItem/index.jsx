import React from 'react';
import style from './styles.module.scss';
import { Image } from 'antd';

const CheckoutItem = props => {
  const { name, price, quantity, image } = props.item;
  return (
    <div className={style.container}>
      <Image
        width={100}
        height={100}
        src={image}
        className={style.image}
        alt='name'
      />
      <div className={style.name}>
        <h5 className={style.itemTitle}>{name}</h5>
        <div>Số lượng: {quantity}</div>
      </div>
      <div className={style.price}>{price}</div>
    </div>
  );
};

export default CheckoutItem;
