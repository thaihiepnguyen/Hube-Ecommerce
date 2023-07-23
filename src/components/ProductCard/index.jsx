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
      <div className={styles.imageContainer}>
        <img className={styles.image} src={'https://salt.tikicdn.com/cache/750x750/ts/product/a2/38/6c/ce008c63f4ac771550439da44f5f8ee8.png.webp'} alt={name}/>
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
        <div className={styles.name}>Apple iPhone 14</div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>26.000.000 đ</div>
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
