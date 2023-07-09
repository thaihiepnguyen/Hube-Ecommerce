import Logo from '../../assets/hube_logo.png';
import LogoTitle from '../../assets/hube_title.png';
import SidebarItem from '../SideBarItem';
import styles from './styles.module.scss';
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
    link: '/admin/dashboard',
  },
  {
    title: 'Products',
    icon: ShoppingCart,
    link: '/admin/products',
  },
  {
    title: 'Orders',
    icon: LocalShipping,
    link: '/admin/orders',
  },
  {
    title: 'Users',
    icon: PeopleAlt,
    link: '/admin/users',
  },
  {
    title: 'Categories',
    icon: ListAlt,
    link: '/admin/categories',
  },
  {
    title: 'Discounts',
    icon: LocalOffer,
    link: '/admin/discounts',
  },
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
