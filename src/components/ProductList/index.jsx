import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss';
import ProductCard from '../ProductCard';
import { CustomLeftArrow, CustomRightArrow } from '../Arrow';

const ProductList = props => {
  const { label, data } = props;

  return (
    <>
      <h2>{label}</h2>
      <Carousel
        itemClass={styles.carouselItem}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
      >
        {data.map(item => (
          <div key={item.id}>
            <ProductCard
              image={item.image}
              name={item.name}
              rate={item.rate}
              price={item.price}
              discount={item.discount}
              address={item.address}
              isFavorite={item.isFavorite}
              categories={item.categories || [{name: 'iPhone'}, {name: 'Apple'}]}
              shopName={item.shopName || 'Gojo Shop'}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductList;
