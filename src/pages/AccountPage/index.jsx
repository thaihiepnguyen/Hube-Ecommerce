import Navbar from "../../components/Navbar";
import styles from './style.module.scss';
import Footer from "../../components/Footer";
import {Breadcrumbs} from "@material-ui/core";
import {Link, useParams} from 'react-router-dom';
import {Typography} from "antd";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie/es6";
import {BASE_URL} from "../../App";
import axios from "axios";
import {AccountBox, Favorite, ShoppingCart, ViewAgenda} from "@material-ui/icons";
import Account from "../Seller/Account";
import ShoppingCartPage from "../ShoppingCartPage";
import ProfilePage from "./ProfilePage";
import FavoritePage from "./FavoritePage";

const breadcrumbs = [
  {
    name: 'Thông tin tài khoản',
    icon: <AccountBox/>,
    content: <ProfilePage/>
  },
  {
    name: 'Quản lý đơn hàng',
    icon: <ShoppingCart/>,
    content: <ShoppingCartPage/>
  },
  {
    name: 'Sản phẩm yêu thích',
    icon: <Favorite/>,
    content: <FavoritePage/>
  },
  {
    name: 'Sản phẩm bạn đã xem',
    icon: <ViewAgenda/>,
    content: <FavoritePage/>
  },
]


const AccountPage = () => {
  const [currentBreadcrumbIndex, setCurrentBreadcrumbIndex] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const urlUser = `${BASE_URL}/user`;
    if (token) {
      async function fetchUser() {
        const response = await axios.get(urlUser, {
          withCredentials: true
        })
        setUser(response.data)
      }
      fetchUser()
    }
  }, []);

  function setCurrentPage(index) {
    setCurrentBreadcrumbIndex(index)
  }

  return (
      <>
        <Navbar/>
        <div className={styles.box}></div>
        <div className={styles.contentContainer}>
          <div style={{marginLeft: 50, marginRight: 50, marginTop: 30}}>
            <div style={{marginBottom: 20}}>
              <Breadcrumbs separator="›" aria-label="breadcrumb" >
                <Link underline="hover" color="inherit" href="/" to={'/'}>
                  Trang chủ
                </Link>
                <Typography color="text.primary">{breadcrumbs[currentBreadcrumbIndex].name}</Typography>
              </Breadcrumbs>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.left}>
                <div className={styles.profileContainer}>
                  <img
                    width={60}
                    height={60}
                    src="/static/media/avatar0.76df38dc900575ebe928.png"
                    alt="avt" />
                  <div style={{marginLeft: 10, marginTop: 10}}>
                    <p style={{margin: 0, fontSize: 'smaller'}}>Tài khoản của </p>
                    {user && <p style={{margin: 0, fontWeight: "bold"}}>{user.fullname}</p>}
                  </div>
                </div>
                <div className={styles.navbarContainer}>
                  { breadcrumbs.map((item, index) => {
                    let result = <></>
                    if (index == currentBreadcrumbIndex) {
                      result = <div style={{
                          borderRadius: 5,
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: 'rgb(235, 235, 240)',
                          padding: 10}}
                             onClick={() => setCurrentPage(index)}>
                          {item.icon}
                          <span style={{marginLeft: 10}}>{item.name}</span>
                        </div>
                    } else {
                      result = <div style={{borderRadius: 5, display: "flex", alignItems: "center", padding: 10}}
                             onClick={() => setCurrentPage(index)}
                        >
                          {item.icon}
                          <span style={{marginLeft: 10}}>{item.name}</span>
                        </div>
                    }
                    return <div className={styles.item}>
                      {result}
                    </div>
                  })}
                </div>

              </div>
              <div className={styles.right}>
                <h3>{breadcrumbs[currentBreadcrumbIndex].name}</h3>
                {
                  breadcrumbs[currentBreadcrumbIndex].content
                }
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </>
  )
}

export default AccountPage;