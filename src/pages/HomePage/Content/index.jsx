import styles from './style.module.scss'
import Slider from "./Slider";
const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Slider/>

      <h1>Danh Sách Các Thể Loại</h1>
      <div style={{height: 300, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Card Component
      </div>

      <h1>Gợi ý cho bạn</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Card Component
      </div>

      <h1>Các sản phẩm phổ biến</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Card Component
      </div>

      <h1>Các sản phẩm bán chạy</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Card Component
      </div>

      <h1>Lịch sử xem của bạn</h1>
      <div style={{height: 200, border: 1, borderColor: "black", borderStyle: "solid", margin: 10}}>
        #HB-40348: Design Card Component
      </div>
    </div>
  )
}

export default Content
