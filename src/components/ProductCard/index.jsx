import React from 'react';
import styles from './styles.module.scss';
import {
  StarOutline,
  Star,
  FavoriteBorder,
  Favorite,
} from '@material-ui/icons';
import Button from '../Button';
import PriceConverter from "../PriceConverter";
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
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.favorite}>
          {isFavorite ? (
            <Favorite className={styles.favoriteIcon} />
          ) : (
            <FavoriteBorder className={styles.favoriteIcon} />
          )}
        </div>
        {categories && (
          <div className={styles.categories}>
            {handleRenderCategory(categories)}
          </div>
        )}
      </div>
      <div className={styles.cardDetail}>
        <div className={styles.name}>{name}</div>
        <div className={styles.priceContainer}>
          <PriceConverter>{price}</PriceConverter>
          {discount && (
              <div className={styles.percent}>
                <span>-{discount}%</span>
              </div>
          )}
        </div>
        <div className={styles.rate}>
          <div>{handleRenderRate(rate)}</div>
          <div style={{fontWeight: "bold", color: "dimgray"}}>{`Đã bán 500`}</div>
        </div>
        <div className={styles.shop}>
          <div>{address}</div>
          <div>{shopName}</div>
        </div>
        <div className={styles.buttonGroup}>
          <Button buttonClassName={styles.button}>Thêm vào giỏ hàng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
