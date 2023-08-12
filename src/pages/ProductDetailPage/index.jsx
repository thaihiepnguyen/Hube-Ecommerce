import styles from "./style.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {getProduct} from "../../api/category";
import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import parse from 'html-react-parser'
import {
  Favorite,
  ShoppingCart,
  Star,
  StarOutline
} from "@material-ui/icons";
import PriceDetailConverter from "../../components/PriceDetailConverter";
import {Breadcrumbs} from "@material-ui/core";
import {Typography} from "antd";
import Quantity from "../../components/Quantity";
import ProductImageContainer from "./ProductImageContainer";

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
  return (
      <>
        <Navbar/>
        <div className={styles.box}></div>
        <div className={styles.contentContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.right}>
              <div style={{height: 80}}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" >
                  <Link underline="hover" color="inherit" href="/" to={'/'}>
                    Trang chủ
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                  >
                    Sản phẩm
                  </Link>
                  <Typography color="text.primary">{product.name}</Typography>
                </Breadcrumbs>
              </div>
              { Object.keys(product).length !== 0 && <ProductImageContainer product={product}/> }
              <div>
                {
                 product?.description && parse(product.description)
                }
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <div>
                <div>{handleRenderRate(product.rate)}</div>
                <p>Tên sản phẩm</p>
                <p className={styles.productName}>{product.name}</p>
                <p>Giá</p>
                <PriceDetailConverter>{product.price}</PriceDetailConverter>
                <Quantity/>
              </div>
              <button className={styles.addToCart}>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <ShoppingCart/>
                    <h3 style={{marginLeft: 10}}>Mua ngay</h3>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <Footer/>
        </div>
      </>
    )
}

export default ProductDetailPage;