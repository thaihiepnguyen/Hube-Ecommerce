import React, { useState } from 'react';
import { Checkbox, Image, InputNumber, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import style from './styles.module.scss';

const CartItem = props => {
  const { name, price, image } = props.item;
  const [quantity, setQuantity] = useState(1);

  function handleChange(value) {
    setQuantity(value);
  }

  return (
    <div className={style.container}>
      <Checkbox className={style.checkbox} />

      <div className={style.itemContainer}>
        <div className={style.column}>
          <div className={style.item}>
            <h5 className={style.itemTitle}>{name}</h5>
            <Image
              className={style.image}
              alt={name}
              width={100}
              height={100}
              src={image}
            />
          </div>
        </div>
        <div className={style.column}>
          <span>{price} đ</span>
        </div>
        <div className={style.column}>
          <InputNumber
            style={{
              minWidth: '120px',
              minHeight: '40px',
              fontSize: '18px',
            }}
            className={style.inputNumber}
            height={60}
            width={150}
            min={1}
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <div className={style.column}>
          <span>{price} đ</span>
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
