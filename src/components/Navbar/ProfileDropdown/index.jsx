import styles from './style.module.scss';
import {
  AccountCircle,
  ExitToApp,
  Help,
  NightsStay,
  Settings,
} from "@material-ui/icons";
import Cookies from "universal-cookie/es6";


const menusIcon = [
  <AccountCircle/>,
  <Settings/>,
  <Help/>,
  <NightsStay/>
];
export const ProfileDropdown = (props) => {
  const { userId } = props;
  const menus = [
    {name: 'Thông tin cá nhân', link: `/profile/${userId}`},
    {name: 'Cài đặt và Chính sách', link: '/settings'},
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
          <ExitToApp/>
          <li className={styles.menusItem} onClick={Logout} >Đăng xuất</li>
        </div>
      </ul>
  );
}
