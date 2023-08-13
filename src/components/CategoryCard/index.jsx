import React from 'react';
import styles from './styles.module.scss';

const CategoryCard = props => {
  const { title, image } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {/* <img
        className={styles.image}
        src={`https://down-vn.img.susercontent.com/file/sg-11134201-23020-c7smqpt41cnva1`}
        alt={title}
      /> */}
    </div>
  );
};

export default CategoryCard;
