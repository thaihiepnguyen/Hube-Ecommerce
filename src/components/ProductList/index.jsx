import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss';
import Arrow from '../Arrow';
import ProductCard from '../ProductCard';

const ProductList = props => {
  const { label, data } = props;

  const handleClickPrevious = () => {};

  const handleClickNext = () => {};

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.productsContainer}>
      <h1>{label}</h1>
      <Arrow direction='left' onPrevious={handleClickPrevious}>
        <ArrowLeftOutlined />
      </Arrow>
      <div className={styles.productList}>
        {data.map(item => (
          <div key={item.id} className={styles.productCardWrapper}>
            <ProductCard
              image={item.image}
              name={item.name}
              rate={item.rate}
              price={item.price}
              discount={item.discount}
              address={item.address}
              isFavorite={item.isFavorite}
              categories={item.categories}
              shopName={item.shopName}
            />
          </div>
        ))}
      </div>

      <Arrow direction='right' onNext={handleClickNext}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default ProductList;
