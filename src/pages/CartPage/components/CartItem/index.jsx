import React from 'react';
import { Checkbox, Image, InputNumber, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import style from './styles.module.scss';

const CartItem = props => {
  const { name, price, image, quantity } = props.item;

  return (
    <div className={style.container}>
      <Checkbox className={style.checkbox} />

      <div className={style.itemContainer}>
        <div className={style.column}>
          <div className={style.item}>
            <h5 className={style.itemTitle}>{name}</h5>
            <Image alt={name} width={100} height={100} src={image} />
          </div>
        </div>
        <div className={style.column}>
          <span>{price}</span>
        </div>
        <div className={style.column}>
          <InputNumber height={40} width={100} min={1} value={quantity} />
        </div>
        <div className={style.column}>
          <span>{price}</span>
        </div>
      </div>
      <Button
        className={style.buttonDelete}
        type='primary'
        danger
        icon={<DeleteOutlined />}
      />
    </div>
  );
};

export default CartItem;
