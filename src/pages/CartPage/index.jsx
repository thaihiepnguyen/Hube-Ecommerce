import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CartItem from './components/CartItem';
import style from './styles.module.scss';
import { Checkbox } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../../App';

const CartPage = () => {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const urlProducts = `${BASE_URL}/products`;
      const [response] = await Promise.all([
        axios.get(urlProducts, {
          withCredentials: true,
        }),
      ]);

      setProducts(response.data);
    }

    fetchData();
  }, []);

  const totalPrice = products.reduce((total, item) => {
    return Number(total) + Number(item.price);
  }, 0);

  function handleRenderPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <div className={style.cartContainer}>
      <Navbar />
      <div className={style.cartContent}>
        <h1>Giỏ hàng</h1>
        <span>Có {products.length} sản phẩm trong giỏ hàng</span>

        <div className={style.listContainer}>
          <div className={style.header}>
            <Checkbox className={style.checkbox} />
            <div className={style.column}>Tất cả</div>
            <div className={style.column}>Đơn giá</div>
            <div className={style.column}>Số lượng</div>
            <div className={style.column}>Thành tiền</div>
          </div>
          <div className={style.listItem}>
            {products.map(item => (
              <>
                <CartItem key={item.id} item={item} />
              </>
            ))}
          </div>
          <div className={style.line}></div>
          <div className={style.totalContainer}>
            <h5>{handleRenderPrice(totalPrice)} đ</h5>
            <h5>Gỉam giá: 0 đ</h5>
            <h2
              style={{
                fontWeight: '700',
                color: 'rgb(255, 66, 78)',
              }}
            >
              {handleRenderPrice(totalPrice)} đ
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
