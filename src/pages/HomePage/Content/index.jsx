import styles from './style.module.scss'
import Slider from "./Slider";
const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Slider/>

      <h1>Shop Our Categories</h1>
      <div style={{height: 300, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Cart Component
      </div>

      <h1>For You</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Cart Component
      </div>

      <h1>Popular Products</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Cart Component
      </div>

      <h1>Best Sellers in Books</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Cart Component
      </div>

      <h1>Your Browsing History</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Cart Component
      </div>

      <h2>Footer</h2>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}></div>
    </div>
  )
}

export default Content
