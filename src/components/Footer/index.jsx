import styles from './style.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <h3 style={{fontWeight:'bold'}}>Liên hệ</h3>
          <div style={{paddingBottom: 10}}>Hotline: + 123-400 123</div>
          <div style={{paddingBottom: 10}}>Email: hubesupport@gmail.com</div>
          <div style={{paddingBottom: 10}}>Địa chỉ: 277 Nguyễn Văn Cừ, Phường 11, Quận 1, TP.HCM</div>
          <div style={{paddingBottom: 10}} className={styles.socialMedia}>
            <FacebookIcon sx={{color: "#1976D2"}}/>
            <InstagramIcon sx={{color: "#1976D2"}}/>
            <LinkedInIcon sx={{color: "#1976D2"}}/>
            <TelegramIcon sx={{color: "#1976D2"}}/>
          </div>
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
    </div>
  )
}

export default Footer;