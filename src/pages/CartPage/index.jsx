import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CartItem from './components/CartItem';
import style from './styles.module.scss';
import ShopCartProduct from '../ShopCartProduct';
import Button from '../../components/Button';
import { Box, Checkbox, Stack } from '@mui/material';
import { CartHeader } from '../SearchPage/components';
import { fCurrency } from '../../utils';
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox all cart' } };

const CartPage = () => {
  const cart = [
    {
      shopName: 'SAMSUNG STORE OFFICIAL',
      products: [
        {
          id: 1,
          name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
          price: '16000000',
          quantity: 1,
          image:
            'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
          selected: false,
        },
        {
          id: 2,
          name: 'Điện Thoại Samsung Galaxy A53',
          price: '7950000',
          quantity: 1,
          image:
            'https://fptshop.com.vn/Uploads/Originals/2023/4/28/638182970630939004_samsung-galaxy-s23-plus-tim-dd-tragop.jpg',
          selected: false,
        },
      ],
    },
    {
      shopName: 'Apple Flagship Store',
      products: [
        {
          id: 3,
          name: 'IPhone 14 Promax 512GB',
          price: '26890000',
          quantity: 1,
          image:
            'https://vn-live-01.slatic.net/p/d69a7f995f22f1977502301c4af7e112.png',
          selected: false,
        },
        {
          id: 4,
          name: 'Macbook Pro M2 15.6"',
          price: '7950000',
          quantity: 1,
          image:
            'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg',
          selected: false,
        },
      ],
    },
  ];

  const [price, setPrice] = useState(0);
  const onSelected = (idxShop, listProductIdx) => {
    let price = 0;
    cart.forEach((shop, idx) => {
      shop.products.forEach((product, idxProduct) => {
        if(idx === idxShop && listProductIdx.includes(idxProduct)){
          cart[idx].products[idxProduct].selected = true
          price += Number(cart[idx].products[idxProduct].price) 
        }
        else
          cart[idx].products[idxProduct].selected = false
      })
    })
    setPrice(price)
  }
  const navigate = useNavigate()
  return (
    <div className={style.cartContainer}>
      <Navbar />
      <div className={style.cartContent}>
        <h1>Giỏ hàng</h1>
        <span>Có {4} sản phẩm trong giỏ hàng</span>
        <div style={{display: 'flex', flexDirection:'row', width: '100%'}}>
        <div className={style.listContainer}>
          <Stack direction='row' alignItems='center'>
            <Checkbox {...label} />
            <CartHeader sx={{ pl: 2, width: '47%' }}>Sản phẩm</CartHeader>
            <CartHeader sx={{ width: '15%' }}>Đơn giá</CartHeader>
            <CartHeader sx={{ width: '15%' }}>Số lượng</CartHeader>
            <CartHeader>Thành tiền</CartHeader>
          </Stack>
          <div className={style.listItem}>
            {cart.map((shop, idx) => (
              <ShopCartProduct
                key={shop.shopName}
                shop={shop}
                idxShop={idx}
                onSelected={onSelected}
              />
            ))}
          </div>
          <div className={style.line}></div>
         
        </div>
        <div className={style.totalContainer}>
            <h4>Tạm tính: {fCurrency(price)}</h4>
            <h4>Giảm giá: 0 VNĐ</h4>
            <h3>Tổng: {fCurrency(price)}</h3>
            <div className={style.buttonGroup}>
          <Button buttonClassName={style.button} onClick={() => navigate("/checkout")}  >Thanh toán</Button>
        </div>
          </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
