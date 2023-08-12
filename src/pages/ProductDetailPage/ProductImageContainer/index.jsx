import styles from './style.module.scss'
import React, {useEffect, useState} from "react";
import {
  Favorite,
} from "@material-ui/icons";
import ProductImage from '../../../components/ProductImage';

const ProductImageContainer = (props) => {
  const { product } = props
  const [clickedImage, setClickedImage] = useState('');
  useEffect(() => {
    setClickedImage(product.images[0])
  }, [])
  return (
    <>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={clickedImage} alt={product.name}/>
        <div className={styles.favorite}>
          <Favorite className={styles.favoriteIcon} />
        </div>
      </div>
      <div className={styles.imagesContainer}>
        {
          product.images.map((item, index) => {
            return (
              <ProductImage image={item} images={product.images} myKey={index} key={index} onClick={setClickedImage}/>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductImageContainer