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
    <div style={{height: "auto"}}>
      {viewDetails ? <DetailOrder clickViewDetailBtn={clickViewDetailBtn}/> : <OrderList clickViewDetailBtn={clickViewDetailBtn}/>}
    </div>
  )
}

export default ShoppingCartPage;