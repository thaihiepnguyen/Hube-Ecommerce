import styles from "./style.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {getProduct} from "../../api/category";
import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {Favorite, FavoriteBorder} from "@material-ui/icons";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchProduct = async () => {
    const response = await getProduct(id);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);


  return (
      <>
        <Navbar/>
        <div className={styles.box}></div>
        <div className={styles.contentContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.rightContent}>
              <div className={styles.imageContainer}>
                <div className={styles.imageBox}>
                  <img className={styles.image} src={product.image} alt={product.name} />
                </div>
                <div className={styles.favorite}>
                    <Favorite className={styles.favoriteIcon} />
                </div>
              </div>
            </div>
            <div className={styles.leftContent}>
              <h2>{product.name}</h2>
            </div>
          </div>
          <Footer/>
        </div>
      </>
    )
}

export default ProductDetailPage;