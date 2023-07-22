import Logo from '../../../../assets/hube_logo.png';
import LogoTitle from '../../../../assets/hube_title.png';
import SidebarItem from '../../../../components/SideBarItem';
import styles from './style.module.scss';
import {
  Dashboard,
  ShoppingCart,
  PeopleAlt,
  ListAlt,
  LocalShipping,
  ExitToApp,
  LocalOffer,
} from '@material-ui/icons';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Dashboard,
    link: '/seller/dashboard',
  },
  {
    title: 'Products',
    icon: ShoppingCart,
    link: '/seller/products',
  },
  {
    title: 'Orders',
    icon: LocalShipping,
    link: '/seller/orders',
  }
];

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <img className={styles.logo} src={LogoTitle} alt='logo' />
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
        <SidebarItem
          className={styles.logoutOption}
          title='Logout'
          icon={ExitToApp}
          link='/admin/logout'
        />
      </div>
    </div>
  );
};

export default SideBar;
