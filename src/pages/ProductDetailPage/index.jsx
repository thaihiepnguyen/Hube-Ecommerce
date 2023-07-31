import styles from './style.module.scss';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.box}></div>
      <div className={styles.contentContainer}>
        <h1>Design Product Detail</h1>
        <div style={{height: 600, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
          #HB-47798: Design Product Detail
          <div>Dang Bao chau</div>
        </div>
        <Footer/>
      </div>
    </>
  )
}


export default ProductDetailPage;