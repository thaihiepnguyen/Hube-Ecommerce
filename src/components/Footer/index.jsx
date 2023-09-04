import styles from './style.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <h3 style={{fontWeight:'bold'}}>Liên hệ</h3>
          <div style={{paddingBottom: 10}}>Hotline: + 123-400 123</div>
          <div style={{paddingBottom: 10}}>Email: hubesupport@gmail.com</div>
          <div style={{paddingBottom: 10}}>Địa chỉ: 277 Nguyễn Văn Cừ, Phường 11, Quận 1, TP.HCM</div>
        </div>
        <div className={styles.center}>
          <h3>Về chúng tôi</h3>
          <div style={{paddingBottom: 10}}>Giới thiệu Hube</div>
          <div style={{paddingBottom: 10}}>Thông tin tuyển dụng</div>
        </div>
        <div className={styles.right}>
          <h3>Hỗ trợ</h3>
          <div style={{paddingBottom: 10}}>Hướng dẫn thanh toán</div>
          <div style={{paddingBottom: 10}}>Chính sách bảo mật thông tin</div>
          <div style={{paddingBottom: 10}}>Chính sách bảo mật thanh toán</div>
          <div style={{paddingBottom: 10}}>Câu hỏi thường gặp</div>
          <div style={{paddingBottom: 10}}>Tra cứu đơn hàng</div>
        </div>
      </div>
      <div className={styles.signature}>
        © 2023 Hube. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer;