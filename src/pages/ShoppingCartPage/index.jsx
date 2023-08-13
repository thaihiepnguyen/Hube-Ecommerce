import React, {useState, useRef} from 'react';
import Navbar from "../../components/Navbar";
import styles from './style.module.scss'
import Footer from "../../components/Footer";
import OrderItem from "./components/OrderItem/OrderItem";
import OrderList from "./components/OrderList/OrderList";
import DetailOrder from "./components/DetailOrder/DetailOrder";
const ShoppingCartPage = () => {
  const [viewDetails, setViewBtn] = useState(false);
    const clickViewDetailBtn = () => {

        setViewBtn(!viewDetails);
    }

  return (
    <>
      <Navbar/>
      <div className={styles.box}></div>
      <div className={styles.contentContainer}>
        <h1>ĐƠN MUA</h1>
        <div style={{height: 'auto', border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
          {/* #HB-98656: Design Shopping Cart
          <div>Dang Bao chau</div> */}
          {viewDetails ? <DetailOrder clickViewDetailBtn={clickViewDetailBtn}/> : <OrderList clickViewDetailBtn={clickViewDetailBtn}/>}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default ShoppingCartPage;