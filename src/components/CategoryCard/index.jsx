import React from 'react';
import styles from './styles.module.scss';

const CategoryCard = props => {
  const { title, image } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />
    </div>
  );
};

export default CategoryCard;
