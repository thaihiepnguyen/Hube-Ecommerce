import React from 'react';
import styles from './styles.module.scss';
import {
  StarOutline,
  Star,
  FavoriteBorder,
  Favorite,
} from '@material-ui/icons';
import Button from '../Button';
const ProductCard = props => {
  const {
    name,
    image,
    price,
    rate,
    address,
    discount,
    isFavorite,
    categories,
    shopName,
  } = props;

  const handleRenderRate = rate => {
    const result = [];
    for (let i = 0; i < rate; i++) {
      result.push(<Star className={styles.starIcon} key={i} />);
    }
    for (let i = 0; i < 5 - rate; i++) {
      result.push(<StarOutline className={styles.starIcon} key={i + rate} />);
    }
    return result;
  };

  const handleRenderCategory = category => {
    const result = [];
    for (let i = 0; i < category.length; i++) {
      result.push(
        <div className={styles.category} key={i}>
          {category[i].name}
        </div>,
      );
    }
    return result;
  };

  return (
    <div className={styles.cardContainer}>
      <div>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.cardDetail}>
        {categories && (
          <div className={styles.categories}>
            {handleRenderCategory(categories)}
          </div>
        )}
        <div className={styles.name}>{name}</div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>{price}$</div>
          {discount && (
            <div className={styles.discount}>
              <div className={styles.cost}>{price}</div>
              <div className={styles.percent}>save {discount}%</div>
            </div>
          )}
        </div>
        <div className={styles.rate}>
          <div>{handleRenderRate(rate)}</div>
          <div>{`20k reviews`}</div>
        </div>
        <div className={styles.shop}>
          <div>{address}</div>
          <div>{shopName}</div>
        </div>
        <div className={styles.buttonGroup}>
          <Button buttonClassName={styles.button}>Add to cart</Button>
          {
            <div className={styles.favorite}>
              {isFavorite ? (
                <Favorite className={styles.favoriteIcon} />
              ) : (
                <FavoriteBorder className={styles.favoriteIcon} />
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
