import styles from './style.module.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getProduct } from '../../api/category';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { ShoppingCart, Star, StarOutline } from '@material-ui/icons';
import PriceDetailConverter from '../../components/PriceDetailConverter';
import { Breadcrumbs } from '@material-ui/core';
import { Typography } from 'antd';
import Quantity from '../../components/Quantity';
import ProductImageContainer from './ProductImageContainer';
import SellerInformation from './SellerInformation';
import ProductList from '../../components/ProductList';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchProduct = async () => {
    const response = await getProduct(id);
    setProduct(response.data);
  };

  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const url = `http://localhost:3001/products`;
      const response = await axios.get(url, {
        withCredentials: true,
      });

      setProducts(response.data);
    }

    fetchData();
  }, []);

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
      <Navbar />
      <div className={styles.box}></div>
      <div className={styles.contentContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.right}>
            <div style={{ height: 80 }}>
              <Breadcrumbs separator='›' aria-label='breadcrumb'>
                <Link underline='hover' color='inherit' href='/' to={'/'}>
                  Trang chủ
                </Link>
                <Link underline='hover' color='inherit' href='/'>
                  {product?.category?.name}
                </Link>
                <Typography color='text.primary'>{product.name}</Typography>
              </Breadcrumbs>
            </div>
            {Object.keys(product).length !== 0 && (
              <ProductImageContainer product={product} />
            )}
            <div style={{ marginTop: 50, marginBottom: 50 }}>
              {product?.description && parse(product.description)}
            </div>
            <h2>Thông tin người bán</h2>
            <SellerInformation />
            <div style={{ height: 80 }}></div>
            <div style={{ width: 850 }}>
              <ProductList label='Những sản phẩm liên quan' data={products} />
            </div>
            <div style={{ height: 80 }}></div>
            <h2>Đánh giá của khách hàng</h2>
            <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
              <img
                width={100}
                height={100}
                src='/static/media/avatar0.76df38dc900575ebe928.png'
                alt='avt'
              />
              <div style={{ marginLeft: 20 }}>
                <h3>Đoàn Linh</h3>
                <p>
                  Điện thoại đẹp, màu sang lắm luôn. Tiki bảo mật khi mua hàng
                  tốt và vận chuyển rất ổn. Mình có check cover dt chưa active
                  và bắt đầu kích hoạt bảo hành ngay khi mình active máy. Chất
                  lượng oke. 10 điểm cho Tiki ♥️
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
              <img
                width={100}
                height={100}
                src='/static/media/avatar0.76df38dc900575ebe928.png'
                alt='avt'
              />
              <div style={{ marginLeft: 20 }}>
                <h3>Cao Thị Kiều Oanh</h3>
                <p>
                  Đóng gói chắc chắn có bọc lớp giấy bìa ở ngoài và 1 lớp giấy
                  bóng nilong ngoài hộp, sản phẩm mới đẹp giá rẻ hơn 1tr so với
                  mua ở cells hoặc mấy chỗ khác, giao nhanh, bảo mật khi giao
                  hàng khi gửi mã về cho khách hàng
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
              <img
                width={100}
                height={100}
                src='/static/media/avatar0.76df38dc900575ebe928.png'
                alt='avt'
              />
              <div style={{ marginLeft: 20 }}>
                <h3>Nguyễn Công Khanh</h3>
                <p>
                  Giao rất nhanh trong sáng là đã nhận được. Hàng rất đẹp, màu
                  xanh trầm nhìn đẹp lắm. Hàng nguyên seal luôn, máy ngoại hình
                  nhìn qua thấy ổn, đẹp. Xài tầm vài ngày nữa mới biết nhưng ban
                  đầu thấy ok rồi đó. Tiki đóng gói rất cẩn thận. Mình thấy rất
                  hài lòng
                </p>
              </div>
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
              <Quantity />
            </div>
            <button className={styles.addToCart}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ShoppingCart />
                  <h3 style={{ marginLeft: 10 }}>Mua ngay</h3>
                </div>
              </div>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;
