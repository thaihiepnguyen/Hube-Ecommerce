import styles from './styles.module.scss';
import { ShoppingCart, LocalAtm } from '@material-ui/icons';

const AdminDashboard = () => {
  return (
    <div>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.boardContainer}>
        <div className={styles.leftBoard}>
          <div className={styles.summary}>
            <div className={styles.orders}>
              <ShoppingCart className={styles.icon} />
              <div className={styles.totalContainer}>
                <div className={styles.total}>23 789</div>
                <div className={styles.orderTitle}>Orders</div>
              </div>
              <div className={styles.new}>+20</div>
            </div>
            <div className={styles.profit}>
              <LocalAtm className={styles.icon} />
              <div className={styles.totalContainer}>
                <div className={styles.total}>{`$12 233 789`}</div>
                <div className={styles.orderTitle}>Profit</div>
              </div>
              <div className={styles.new}>+20</div>
            </div>
          </div>
          <div className={styles.salesChart}>hihi</div>
        </div>
        <div className={styles.rightBoard}>
          <div className={styles.topSell}>hihi</div>
          <div className={styles.visitorsChart}>hihi</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
