import styles from './style.module.scss';
import { Language, NotificationsNone, Search, ShoppingCart, Menu, Gamepad,
  Laptop,
  EvStation, LocalHospital, HomeWork, Bookmark, Build, Sports, Highlight, CardTravel
} from '@material-ui/icons';
import logo from '../../assets/hube_logo.png';
import logotitle from '../../assets/hube_title.png';
import defaultAvatar from '../../assets/avatar0.png';
import Button from '../Button';
import CategoryItem from '../CategoryItem';
import { Badge } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie/es6";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileDropdown } from "./ProfileDropdown";
import { BASE_URL } from "../../App";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import NotificationDropdown from "./NotiDropdown";


const categoriesIcon = [
  <Gamepad/>,
  <Laptop/>,
  <LocalHospital/>,
  <EvStation/>,
  <CardTravel/>,
  <HomeWork/>,
  <Bookmark/>,
  <Build/>,
  <Sports/>,
  <Highlight/>,
];

const Navbar = () => {
  const navigate = useNavigate()
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const [user, setUser] = useState(null);
  const [isAvatarHovering, setAvatarHovering] = useState(false);
  const [isNotificationClick, setNotificationClick] = useState(false);
  const [notifications, setNotifications] = useState([
    'Trang thương mại điện tử Hube, còn được gọi là trang mua sắm trực tuyến hoặc cửa hàng trực tuyến.',
  ])

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const urlUser = `${BASE_URL}/user`;
    const urlNoti = `${BASE_URL}/noti/1`;
    if (token) {
      const axiosRequests = [
        axios.get(urlUser, {
          withCredentials: true
        }),
        axios.get(urlNoti, {
          withCredentials: true
        }),
      ];
      Promise.all(axiosRequests)
        .then((responses) => {
          const userData = responses[0].data;
          const notiData = responses[1].data;
          setUser(userData);
          setNotifications(prev => [...prev, notiData.templateContent])
        })
        .catch((e) => {
          console.error(e.message);
        })
    }
  }, []);



  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `${BASE_URL}/categories`;
    axios.get(url, {
      withCredentials: true
      })
      .then(function (response) {
        setCategories(response.data)
      }).catch((e) => {
      console.error(e.message);
    })
  }, [])

  const handleMouseClick = () => {
    setAvatarHovering(!isAvatarHovering);
  }

  const handleOutsideClick = () => {
    setAvatarHovering(false);
  }

  const handleNotiMouseClick = () => {
    setNotificationClick(!isNotificationClick);
  }

  const handleOutsideNotiClick = () => {
    setNotificationClick(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  }
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link className={styles.logoContainer} to='/'>
           
            <img
              className={styles.logoTitle}
              src={logotitle}
              alt={'logo-title'}
            />
          </Link>
        </div>
        <div className={styles.megaMenu}>
        <Badge>
                <Menu className={styles.menuStyle} />
          </Badge>
          <div className={styles.catalogMenuDropdown}>
            <div className={styles.categoryColumn}>
              <h1>Danh mục sản phẩm</h1>
              {
        categories.map((item, index) => (
          <a key={item._id} href="#" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
           
              {item.name}
          </a>
        ))
      }
            </div>
  
            <div className={styles.productColumn}
             style={{ visibility:  hover ? 'visible' : 'hidden' }}
            
            >
              <div className={styles.productColumnTitle}>
                <Gamepad/>
                <span>Làm đẹp sức khoẻ</span>
              </div>
  `
              <div className={styles.productColumnMenu}  
             
              >
                <h3>LÀM ĐẸP - SỨC KHOẺ</h3>
                <a href="#">Khẩu trang các loại</a>
                <a href="#">Nước rửa tay - xà phòng</a>
                <a href="#">Băng keo cá nhân</a>
                <a href="#">Khăn giấy - giấy ướt</a>
                <a href="#">Chăm sóc cá nhân khác</a>
                <a href="#">Chăm sóc làm đẹp</a>
                <a href="#" style={{ color: 'blue' }}>Xem tất cả</a>
              </div>
            </div>
  
  
  
  
        
         
          </div>
        </div>
        <div className={styles.center} onSubmit={handleSubmit}>
       
       


          <form className={styles.searchContainer}>
            <input
              className={styles.inputStyle}
              placeholder={' Tìm kiếm sản phẩm...'}
            />
            <Search className={styles.searchStyle} onClick={() => navigate("/search")} />
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <div className={styles.notificationContainer}>
              <Badge
                badgeContent={notifications.length}
                color='secondary'
                className={styles.notificationStyle}
              >
                <OutsideClickHandler onOutsideClick={handleOutsideNotiClick}>
                  <NotificationsNone style={{ position: "relative" }} onClick={handleNotiMouseClick} />
                  <div>
                    {isNotificationClick && <NotificationDropdown noti={notifications} />}
                  </div>
                </OutsideClickHandler>
              </Badge>
              <Badge
                badgeContent={2}
                color='secondary'
                className={styles.shoppingCartStyle}
              >
                <ShoppingCart onClick={() => {
                  window.location.href = '/cart';
                }
                }/>
              </Badge>
              <Badge>
                <Language className={styles.languageStyle} />
              </Badge>
            </div>
            {
              user ?
                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center' }} className={styles.avatarContainer}
                      onClick={handleMouseClick}>
                      <img src={defaultAvatar} width={55} height={55} alt="avt" style={{marginLeft: 20}} />
                      <span style={{ fontWeight: 'bolder', marginLeft: 10 }}>{user?.fullname}</span>
                    </div>
                    <div>
                      {isAvatarHovering && <ProfileDropdown userId={user?.userId} />}
                    </div>
                  </div>
                </OutsideClickHandler> : <div style={{ display: 'flex' }}>
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
    </header>
  );
};
export default Navbar;
