import Navbar from "../../components/Navbar";
import styles from './style.module.scss'
import Footer from "../../components/Footer";
import OrderItem from "./components/OrderItem/OrderItem";
import OrderList from "./components/OrderList/OrderList";
import DetailOrder from "./components/DetailOrder/DetailOrder";
const ShoppingCartPage = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.box}></div>
      <div className={styles.contentContainer}>
        <h1>Shopping Cart</h1>
        <div style={{height: 'auto', border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
          #HB-98656: Design Shopping Cart
          <div>Dang Bao chau</div>
          {/* <OrderList/> */}
          {/* <OrderItem/>
          <OrderItem/> */}
          <DetailOrder/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default ShoppingCartPage;