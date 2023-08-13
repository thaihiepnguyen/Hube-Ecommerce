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

const breadcrumbs = [
  'Thông tin tài khoản',
  'Quản lý đơn hàng',
  'Sản phẩm yêu thích',
  'Sản phẩm bạn đã xem',
]


const AccountPage = () => {
  const [currentBreadcrumbs, setCurrentBreadcrumbs] = useState(breadcrumbs[0]);
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
  
  return (
      <>
        <Navbar/>
        <div className={styles.box}></div>
        <div className={styles.contentContainer}>
          <div style={{marginLeft: 180, marginRight: 180, marginTop: 30}}>
            <div style={{marginBottom: 20}}>
              <Breadcrumbs separator="›" aria-label="breadcrumb" >
                <Link underline="hover" color="inherit" href="/" to={'/'}>
                  Trang chủ
                </Link>
                <Typography color="text.primary">{currentBreadcrumbs}</Typography>
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

              </div>
              <div className={styles.right}>

              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </>
  )
}

export default AccountPage;