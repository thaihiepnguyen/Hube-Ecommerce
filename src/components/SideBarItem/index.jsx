import cx from 'classnames';
import styles from './styles.module.scss';

const SidebarItem = props => {
  const { title, icon: Icon, link, className } = props;
  return (
    <a className={cx(styles.container, className)} href={link}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.title}>{title}</div>
    </a>
  );
};

export default SidebarItem;
