import styles from './style.module.scss'
import React, {useEffect, useState} from "react";
import {
  Favorite, FavoriteBorder,
} from "@material-ui/icons";
import ProductImage from '../../../components/ProductImage';

const ProductImageContainer = (props) => {
  const [favorite, setFavorite] = useState(false);
  const { product } = props
  const [clickedImageIndex, setClickedImageIndex] = useState(0)
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.images[clickedImageIndex]} alt={product.name}/>
        <div className={styles.favorite} onClick={() => {
          setFavorite(!favorite);
        }}>
          {favorite ? (
            <Favorite className={styles.favoriteIcon} />
          ) : (
            <FavoriteBorder className={styles.favoriteIcon} />
          )}
        </div>
      </div>
      <div className={styles.imagesContainer}>
        {
          product.images.map((item, index) => {
            if (clickedImageIndex === index) {
              return (<ProductImage active={true} image={item} myKey={index} key={index} onClick={setClickedImageIndex}/>)
            } else {
              return (<ProductImage active={false} image={item} myKey={index} key={index} onClick={setClickedImageIndex}/>)
            }
          })
        }
      </div>
    </div>
  )
}

export default ProductImageContainer