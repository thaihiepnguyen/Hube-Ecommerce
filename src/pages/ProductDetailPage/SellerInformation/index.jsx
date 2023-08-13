import { Add } from '@material-ui/icons'
import Button from '../../../components/Button'
import styles from './style.module.scss'

const SellerInformation = () => {
  return (
    <>
      <div className={styles.sellerContainer}>
        <h4 className={styles.sellerName}>Apple Inc. Shop</h4>
        <div className={styles.sellerInformation}>
          <img 
          width={100}
          src="/static/media/avatar0.76df38dc900575ebe928.png" 
          alt="avt" />
          <div className={styles.sellerRating}>
            <p>4.7 / 5 sao</p>
            <p>482.5k+ theo dõi</p>
          </div>
        </div>
        <h4 className={styles.sellerDescription}>Mô tả shop</h4>
        <div className={styles.bottom}>
          <Button borderColor={'#8A2BE2'} textColor={'#4B0082'}>
            <div style={{display: 'flex'}}>
              <Add/>
              <p style={{marginTop: 0, marginBottom: 0, marginLeft: 10}}>Theo dõi</p>
            </div>
          </Button>
          <p style={{width: 150, color: '#4B0082'}}>{"Xem shop > "}</p>
        </div>
      </div>
    </>
  )
}

export default SellerInformation