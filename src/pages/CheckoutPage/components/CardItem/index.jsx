import React from 'react';
import style from './styles.module.scss';
import {Image, Radio} from 'antd';

const CardItem = props => {
  const { title, description, image } = props.item;
  const { isChecked, setIndex } = props;
  return (
    <div className={style.container}>
      <input
        type="radio"
        className={style.checkbox}
        checked={isChecked}
        onChange={setIndex}
      />
      <div className={style.title}>{title}</div>
      <div>{description}</div>
      <div className={style.imageContainer}>
        <Image preview={false} alt={title} width={50} height={50} src={image} />
      </div>
    </div>
  );
};

export default CardItem;
