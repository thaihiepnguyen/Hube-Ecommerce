import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CartItem from './components/CartItem';
import style from './styles.module.scss';
import { Checkbox } from 'antd';

const CartPage = () => {
  const list = [
    {
      id: 1,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '6.990.000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
    {
      id: 2,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '6.990.000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
    {
      id: 3,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '6.990.000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
    {
      id: 4,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '6.990.000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
    {
      id: 5,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '6.990.000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
  ];
  return (
    <div className={style.cartContainer}>
      <Navbar />
      <div className={style.cartContent}>
        <h1>Giỏ hàng</h1>
        <span>Có {list.length} sản phẩm trong giỏ hàng</span>

        <div className={style.listContainer}>
          <div className={style.header}>
            <Checkbox className={style.checkbox} />
            <div className={style.column}>Tất cả</div>
            <div className={style.column}>Đơn giá</div>
            <div className={style.column}>Số lượng</div>
            <div className={style.column}>Thành tiền</div>
          </div>
          <div className={style.listItem}>
            {list.map(item => (
              <>
                <CartItem key={item.id} item={item} />
              </>
            ))}
          </div>
          <div className={style.line}></div>
          <div className={style.totalContainer}>
            <h4>Tạm tính: 123.123.123 VNĐ</h4>
            <h4>Gỉam giá: 0 VNĐ</h4>
            <h3>Tổng: 123.123.123 VNĐ</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
