import { Add, Star, KeyboardArrowRight } from '@material-ui/icons'
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
          height={100}
          src="/static/media/avatar0.76df38dc900575ebe928.png" 
          alt="avt" />
          <div className={styles.sellerRating}>
            <div style={{display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.25rem'}}>4.7 / 5

            <Star className={styles.starIcon} />
            </div>

            <p>482.5k+ theo dõi</p>
           
          </div>
        </div>
        <div style={{display: 'flex',  width: '700px'}}>
            <Button borderColor={'#8A2BE2'} textColor={'#4B0082'} style={{width: '200px'}}>
            <div style={{display: 'flex'}}>
              <Add/>
              <p style={{marginTop: 0, marginBottom: 0, marginLeft: 10}}>Theo dõi</p>
            </div>
          </Button>

          <Button borderColor={'#8A2BE2'} textColor={'#4B0082'} style={{width: '200px'}}>
            <div style={{display: 'flex'}}>
              <p style={{marginTop: 0, marginBottom: 0, marginLeft: 10}}>Xem Shop</p>
              <KeyboardArrowRight/>
            </div>
          </Button>
          </div>
      </div>
    </>
  )
}

export default SellerInformation