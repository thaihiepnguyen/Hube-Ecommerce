import React, {useState} from 'react';
import style from './styles.module.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import cx from 'classnames';
import { Button, Input } from 'antd';
import CheckoutItem from './components/CheckoutItem';
import CardItem from './components/CardItem';
import { fCurrency } from '../../utils';

const CheckoutPage = () => {
  const list = [
    {
      id: 1,
      name: 'Điện Thoại Samsung Galaxy S20 FE (8GB/256GB)',
      price: '16000000',
      quantity: 1,
      image:
        'https://salt.tikicdn.com/cache/750x750/ts/product/c6/54/f8/d35de848a3822e06338a0db67cee30e4.jpg.webp',
    },
    {
      id: 2,
      name: 'Điện Thoại Samsung Galaxy A53',
      price: '7950000',
      quantity: 1,
      image:
        'https://fptshop.com.vn/Uploads/Originals/2023/4/28/638182970630939004_samsung-galaxy-s23-plus-tim-dd-tragop.jpg',
    },
    {
      id: 3,
      name: 'IPhone 14 Promax 512GB',
      price: '26890000',
      quantity: 1,
      image:
        'https://vn-live-01.slatic.net/p/d69a7f995f22f1977502301c4af7e112.png',
    }
  ]; 

  const listCard = [
    {
      id: 1,
      title: 'COD',
      description: 'Thanh toán khi nhận hàng',
      image:
        'https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-pin-point-png-image_6331307.jpg',
    },
    {
      id: 2,
      title: 'Viettel Money',
      description: 'Thanh toán qua Viettel Money',
      image:
        'https://vdsx.design/static/media/logo_viettel_money_red.46c1d6b7.svg',
    },
    {
      id: 3,
      title: 'Momo',
      description: 'Thanh toán qua Momo',
      image:
        'https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-2-2.png',
    },
    {
      id: 4,
      title: 'ZaloPay',
      description: 'Thanh toán qua ZaloPay',
      image:
        'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png',
    },
    {
      id: 5,
      title: 'PayPal',
      description: 'Thanh toán qua PayPal',
      image:
        'https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/2e718890-93ae-42da-43c6-351afd212900/preview',
    },
    {
      id: 6,
      title: 'ATM',
      description: 'Thanh toán qua ATM',
      image:
        'https://static.wixstatic.com/media/9d8ed5_810e9e3b7fad40eca3ec5087da674662~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
    },
  ];

  const [checkedIndex, setCheckedIndex] = useState(1);
  console.log(checkedIndex)
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.content}>
        <div className={style.checkoutContainer}>
          <div className={cx(style.box, style.buyerDetails)}>
            <div className={style.buyerHeader}>
              <div>Giao hàng tới</div>
              <Button className={style.changeButton} color='B414FF'>
                Thay đổi
              </Button>
            </div>
            <div>
              <div className={style.buyerName}>Bùi Tấn Sang | 0382332332</div>
            </div>
            <div className={style.addressContainer}>
              <div className={style.addressStatus}>{'Office'}</div>
              <div className={style.addressDetails}>
                {'227 Nguyễn Văn Cừ, Phường 1, Quận 5, Thành phố Hồ Chí Minh'}
              </div>
            </div>
          </div>
          <div className={cx(style.box, style.listItemCheckout)}>
            <div className={style.buyerHeader}>
              <div>Sản phẩm</div>
              <Button className={style.changeButton} color='B414FF'>
                Thay đổi
              </Button>
            </div>
            <div className={style.listContainer}>
              {list.map((item, index) => (
                <CheckoutItem key={index} item={item} />
              ))}
            </div>
            <div className={style.noteContainer}>
              <Input
                className={style.input}
                placeholder='Ghi chú cho người bán'
                width={100}
              />
              <div className={style.total}>Tổng: {fCurrency(50840000)}</div>
            </div>
          </div>
          <div className={cx(style.box)}>
            <div className={style.buyerHeader}>
              <div>Phương thức thanh toán</div>
            </div>
            <div className={style.listCard}>
              {listCard.map((item ,index)=> (
                <CardItem key={item.id} item={item} isChecked={checkedIndex === index} setIndex={()=>setCheckedIndex(index)} />
              ))}
            </div>
          </div>
        </div>
        <div className={cx(style.box, style.promoContainer)}>
          <div className={style.buyerHeader}>
            <div>Đơn hàng</div>
          </div>

          <Input
            title='Mã giảm giá'
            className={style.input}
            placeholder='Mã giảm giá'
            width={100}
          />

          <div className={style.text}>Tiền hàng: {fCurrency(50840000)}</div>
          <div className={style.text}>Giảm giá: 0 VNĐ</div>
          <div className={style.text}>Phí giao hàng: {fCurrency(12000)}</div>
          <div className={cx(style.text, style.bold)}>
            Tổng: {fCurrency(50840000 + 12000)}
          </div>

          <Button className={style.confirmButton}>
            {'Thanh toán 123.132.123 VNĐ'}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
