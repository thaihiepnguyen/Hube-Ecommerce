import styles from './style.module.scss';
import {Help, Language, NotificationsNone, Search, ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/hube_logo.png';
import logotitle from '../../assets/hube_title.png';
import defaultAvatar from '../../assets/avatar0.png';
import Button from '../Button';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie/es6";
import axios from "axios";
import {useEffect, useState} from "react";
import {ProfileDropdown} from "./ProfileDropdown";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isAvatarHovering, setAvatarHovering] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    if (token) {
      const url = 'http://localhost:3001/user';
      axios.get(url, {
        withCredentials: true
      })
      .then(function (response) {
        setUser(response.data)
      }).catch((e) => {
        console.error(e.message); // "oh, no!"
      })
    }
  }, [])

  const handleMouseClick = () => {
    setAvatarHovering(!isAvatarHovering);
  }


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
              placeholder={' Tìm kiếm sản phẩm...'}
            />
            <Search className={styles.searchStyle} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <div className={styles.notificationContainer}>
              <Badge
                badgeContent={0}
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
              <Badge>
                <Language className={styles.languageStyle}/>
              </Badge>
            </div>
            {
              user? <div>
                <div style={{display: 'flex', alignItems: 'center'}} className={styles.avatarContainer}
                onClick={handleMouseClick}>
                  <span style={{fontWeight: 'bolder'}}>Xin chào, {user?.fullname}</span>
                  <img src={defaultAvatar} width={55} height={55} alt="avt"/>
                </div>
                <div>
                  {isAvatarHovering && <ProfileDropdown userId={user?.userId}/>}
                </div>
              </div> : <div style={{ display: 'flex' }}>
                <Link to='/login'>
                <Button borderColor={'#8A2BE2'} textColor={'#4B0082'}>
                Đăng nhập
                </Button>
                </Link>
                <Link to='/sign-up'>
                <Button
                borderColor={'#8A2BE2'}
                backgroundColor={'#8A2BE2'}
                textColor={'#FFFFFF'}
                >
                Đăng ký
                </Button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
