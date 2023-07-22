import styles from './style.module.scss';
import {
  AccountCircle,
  ExitToApp,
  Help,
  NightsStay,
  Settings,
  ShoppingBasket,
} from "@material-ui/icons";
import Cookies from "universal-cookie/es6";


const menusIcon = [
  <AccountCircle style={{padding: 5}}/>,
  <ShoppingBasket style={{padding: 5}}/>,
  <Settings style={{padding: 5}}/>,
  <Help style={{padding: 5}}/>,
  <NightsStay style={{padding: 5}}/>
];
export const ProfileDropdown = (props) => {
  const { userId } = props;
  const menus = [
    {name: 'Thông tin cá nhân', link: `/profile/${userId}`},
    {name: 'Đơn hàng của tôi', link: `/cart/${userId}`},
    {name: 'Cài đặt chung', link: '/settings'},
    {name: 'Hỗ trợ và giúp đỡ', link: '/help'},
    {name: 'Chế độ hiển thị', link: '/access'},
  ];
  const Logout = () => {
      const cookies = new Cookies();
      cookies.remove('token');
      window.location.reload();
  }
  return (
      <ul className={styles.menusContainer}
      >
        {
          menus.map((menu, index) => {
            return (
              <a className={styles.menusItemContainer} key={index} href={`${menu.link}`}>
                {menusIcon[index]}
                <li className={styles.menusItem}>
                  {menu.name}
                </li>
              </a>
            )
          })
        }
        <div className={styles.menusItemContainer}>
          <ExitToApp style={{padding: 5}}/>
          <li className={styles.menusItem} onClick={Logout} >Đăng xuất</li>
        </div>
      </ul>
  );
}
