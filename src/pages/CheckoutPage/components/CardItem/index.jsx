import React from 'react';
import style from './styles.module.scss';
import { Checkbox, Image } from 'antd';

const CardItem = props => {
  const { title, description, image } = props.item;
  return (
    <div className={style.container}>
      <Checkbox className={style.checkbox} />
      <div className={style.title}>{title}</div>
      <div>{description}</div>
      <div className={style.imageContainer}>
        <Image preview={false} alt={title} width={50} height={50} src={image} />
      </div>
    </div>
  );
};

export default CardItem;
