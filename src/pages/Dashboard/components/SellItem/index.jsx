import React from 'react';
import styles from './styles.module.scss';

const SellItem = props => {
  const { index, image, name, price } = props;
  return (
    <div className={styles.container}>
      <div className={styles.index}>{index}</div>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.item}>
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default SellItem;
