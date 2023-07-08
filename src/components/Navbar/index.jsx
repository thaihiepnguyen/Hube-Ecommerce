import styles from './style.module.scss';
import { NotificationsNone, Search, ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/hube_logo.png';
import logotitle from '../../assets/hube_title.png';
import Button from '../Button';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImage} src={logo} alt={'logo'} />
            <img
              className={styles.logoTitle}
              src={logotitle}
              alt={'logo-title'}
              height={80}
              width={90}
            />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.searchContainer}>
            <input
              className={styles.inputStyle}
              placeholder={' What are you looking for?'}
            />
            <Search className={styles.searchStyle} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <div>
              <Badge
                badgeContent={1}
                color='secondary'
                className={styles.notificationStyle}
              >
                <NotificationsNone />
              </Badge>
              <Badge
                badgeContent={2}
                color='secondary'
                className={styles.shoppingCartStyle}
              >
                <ShoppingCart />
              </Badge>
            </div>
            <div style={{ display: 'flex' }}>
              <Link to='/login'>
                <Button borderColor={'#8A2BE2'} textColor={'#4B0082'}>
                  Login
                </Button>
              </Link>
              <Link to='/sign-up'>
                <Button
                  borderColor={'#8A2BE2'}
                  backgroundColor={'#8A2BE2'}
                  textColor={'#FFFFFF'}
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
